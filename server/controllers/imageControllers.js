import axios from "axios";
import userModel from "../models/userModel.js";
import FormData from "form-data";

export const generateImage = async (req, res) => {
    try {
        const { userId, prompt } = req.body;

        // Validate input
        if (!userId || !prompt) {
            return res.status(400).json({ success: false, message: "Missing userId or prompt" });
        }

        // Find user in database
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Check user's credit balance
        if (user.creditBalance <= 0) {
            return res.status(400).json({
                success: false,
                message: "Insufficient Credits",
                creditBalance: user.creditBalance,
            });
        }

        // Prepare the form data for the external API
        const formData = new FormData();
        formData.append("prompt", prompt);

        // Call the external API
        const { data } = await axios.post(
            "https://clipdrop-api.co/text-to-image/v1",
            formData,
            {

                //  method: 'POST',
                //  headers: {'x-api-key': process.env.CLIPDROP_API_KEY,}, body: form,

                headers: {"x-api-key": process.env.CLIPDROP_API, ...formData.getHeaders(),
                },

                responseType: "arraybuffer",
            }
        );
        // Convert response data to Base64 format
        const base64Image = Buffer.from(data, "binary").toString("base64");
        const resultImage = `data:image/png;base64,${base64Image}`;

        // Deduct 1 credit from user's balance
        user.creditBalance -= 1;
        await user.save();

        // Respond with success
        res.status(200).json({
            success: true,
            message: "Image Generated",
            resultImage,
            creditBalance: user.creditBalance,
        });
    } catch (error) {
        console.error("Error in generateImage:", error.message);
        if (axios.isAxiosError(error) && error.response) {
            return res.status(error.response.status).json({
                success: false,
                message: `External API error: ${error.response.data?.message || error.message}`,
            });
        }
    // General error logging
    res.json({ success: false, message: "Internal server error" });

    }
};
