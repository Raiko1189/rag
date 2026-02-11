import { getGeminiEmbedding } from "../../utils/embedData";

export const uploadDataController = {
    async uploadData(text) {
        try {
            const chunks = chunkText(text)
            const vectors = getGeminiEmbedding(chunks)
            const embededChunks = await Promise.all(
                chunks.map(async (chunk, index) => {
                    try {

                        const embeddingRes = await getGeminiEmbedding(chunk)

                        return {
                            content: chunk,
                            embedding: embeddingRes[0]
                        };
                    } catch (embedError) {
                        console.error(`Embedding failed for chunk "${chunk.metadata.title}":`, embedError);
                        return null;
                    }
                })
            );

            const successfulEmbeddings = embededChunks.filter(chunk => chunk !== null);

            if (successfulEmbeddings.length === 0) {
                return res.status(500).json({
                    message: "All embedding operations failed",
                    status: false
                });
            }


            // 4. Prepare documents for database insertion
            const documents = successfulEmbeddings.map((chunk) => {
                return {
                    content: chunk.content,
                    embedding: chunk.embedding,
                };
            });

        } catch (error) {

        }
    }
}