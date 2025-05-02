
# 🖼️ Smart PDF Parser – Frontend (Next.js)

This is the frontend interface for the Smart PDF Property Parser.  
Built with **Next.js**, it allows users to upload real estate brochure PDFs and extract structured property data using the AI-powered backend.

> GitHub Repo: [razan310/smart-pdf-frontend](https://github.com/razan310/smart-pdf-frontend)

---

## 🚀 Features

- 📤 Upload PDF files via form
- 🔁 Handles file conversion and error states
- 🌐 Sends data to the FastAPI backend for processing
- 📊 Displays extracted property fields in a structured format
- ⚡ Built with Tailwind CSS and Axios

---

## 🛠️ Tech Stack

- **Next.js** – React framework for frontend UI
- **Tailwind CSS** – Utility-first styling
- **Axios** – API requests
- **Vercel** – Deployment platform
- **FastAPI Backend** – Receives and processes uploaded PDFs

---

## 📦 Getting Started (Local Setup)

```bash
# 1. Clone the repo
git clone https://github.com/razan310/smart-pdf-frontend.git
cd smart-pdf-frontend

# 2. Install dependencies
npm install

# 3. Set up environment variables
echo "NEXT_PUBLIC_API_URL=https://smart-pdf-backend-1.onrender.com" > .env.local

# 4. Run the development server
npm run dev
```

---

## 📁 File Overview

- `components/UploadForm.js` – Component to handle PDF upload and API interaction
- `app/page.js` – Main page displaying upload UI and extracted data grid

---

## 🖼️ Main Page Overview

- File: `app/page.js`
- Displays a title and upload form
- When a PDF is uploaded, sends it to the backend
- Shows extracted fields in a responsive grid
- Each field has a label (in uppercase) and its value

---

## 🌐 Deployment

- Deployed on [Vercel](https://vercel.com)
- Automatically connected to GitHub for continuous deployment


---

## 🔗 Backend API Used

**POST /parse-pdf**  
URL: `https://smart-pdf-backend-1.onrender.com/parse-pdf`

- Accepts: `multipart/form-data` with a PDF file
- Returns: JSON object with extracted property fields

---

## 🧠 Example JSON Output

```json
{
  "property_name": "Bugatti Residences",
  "developer": "Binghatti",
  "location": "Downtown Dubai",
  "bedrooms": "2",
  "area": "1500 sqft"
}
```

---

## 📄 License

This project is open-source and licensed under the MIT License.
