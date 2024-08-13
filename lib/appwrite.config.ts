import * as sdk from "node-appwrite";
export const {
	PROJECT_ID,
	API_KEY,
	DATABASE_ID,
	PATIENT_COLLECTION_ID,
	DOCTOR_COLLECTION_ID,
	APPOINTMENT_COLLECTION_ID,
	NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
	NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

const client = new sdk.Client()
	.setEndpoint("https://cloud.appwrite.io/v1")
	.setProject("66b5a3870012da206b87")
	.setKey(
		"748added63b85d68828d1ce0652ba62d4d6e05eabbea5fcb2a394a68dd362f74db6d45c7861c27d06769d4048f57eeb487159c74a5deaceb9d771da50c3e63ee9f8dca7d6b736841421e8ee3ba8aaed76145f2a4e5edd5d9a83ee27d270edcabcbfdc38132a70c9de366efe6af9adbe454747f3f75d7133293f38edbb835c000"
	);

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
