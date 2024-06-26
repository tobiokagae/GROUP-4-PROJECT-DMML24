# **Sleep Disorder Predictor**
![](https://github.com/tobiokagae/GROUP-4-PROJECT-DMML24/assets/113653966/08a72c31-60b1-4efe-b9eb-3987385a2db7)

## Deskripsi Aplikasi 
Sleep Disorder Predictor adalah aplikasi web yang dirancang untuk membantu pengguna dalam mendiagnosis potensi gangguan tidur berdasarkan data kesehatan dan kebiasaan sehari-hari. Aplikasi ini menggunakan model machine learning yang telah dilatih untuk memprediksi gangguan tidur seperti insomnia, sleep apnea, atau kondisi tidur sehat. Frontend aplikasi ini dibangun menggunakan Next.js, sedangkan backend menggunakan Flask.


## Struktur Aplikasi
- Folder `FrontEnd`:
  Berisi kode untuk tampilan Aplikasi Sleep Disorder Predictor.
- File `BackEnd/app.py`:
  Berisi skrip untuk mengolah data data yang dikirimkan oleh Frontend

## Teknologi yang Digunakan
- **Frontend** :
  - **Next.js** : Framework React untuk membangun aplikasi web yang dirender di server
  - **React** : Library JavaScript untuk membangun antarmuka pengguna.
- **Backend**
   - **Flask** : Framework web untuk Python yang digunakan untuk membuat API RESTful
   - **scikit-learn** : Digunakan untuk membangun dan menyimpan model machine learning
   - **joblib** : Untuk menyimpan dan memuat model machine learning  serta encoder
   - **Pandas** : Digunakan untuk memproses data dalam bentuk DataFrame
   - **Flask-CORS** : Mengizinkan Cross-Origin Resource Sharing (CORS)

## Alur Kerja Aplikasi
1. **Pengumpulan Data** : Pengguna mengisi formulir di frontend Next.js dengan data pribadi dan kesehatan mereka seperti usia, durasi tidur, kualitas tidur, tingkat aktivitas fisik, tingkat stres, kategori BMI, detak jantung, jumlah langkah harian, dan tekanan darah (sistolik dan diastolik).
2. **Preprocessing Data** : Data yang dikumpulkan dari pengguna dikonversi ke dalam bentuk numerik yang sesuai dengan format yang digunakan saat pelatihan model. Misalnya, gender dikonversi menjadi nilai 0 atau 1, dan kategori BMI juga dikonversi menjadi nilai numerik.
3. **Prediksi** : Data yang telah diproses kemudian diberikan ke model machine learning di backend Flask untuk memprediksi jenis gangguan tidur yang mungkin dialami oleh pengguna. Model menghasilkan prediksi yang kemudian dikonversi kembali ke label deskriptif (seperti "Healthy Sleep", "Insomnia", "Sleep Apnea").
4. **Feedback** : Pengguna dapat memberikan umpan balik mengenai prediksi yang diberikan oleh aplikasi, yang kemudian disimpan untuk analisis lebih lanjut.

## Endpoint API
- /predict [POST] :
  - **Input** : JSON dengan parameter kesehatan dan kebiasaan pengguna.
  - **Output** : JSON dengan prediksi jenis gangguan tidur dan indikasi tekanan darah rendah jika ada.
  - **Contoh Input** :
    ```json
    {
        "gender": "Male",
        "age": 30,
        "sleep_duration": 7,
        "quality_of_sleep": 3,
        "physical_activity_level": 2,
        "stress_level": 2,
        "bmi_category": "Normal",
        "heart_rate": 70,
        "daily_steps": 10000,
        "systolic": 120,
        "diastolic": 80
    }
    ```
  - **Contoh Output** :
    ```json
    {
        "prediction" : "Healthy Sleep",
        "low_blood_pressure" : "false"
    }
    ```
- /feedback [POST] :
  - **Input** : JSON dengan pesan umpan balik dari pengguna.
  - **Output** : JSON konfirmasi penerimaan umpan balik.
  - **Contoh Input** :
    ```json
    {
        "feedback": "The prediction was accurate and helpful!"
    }
    ```
  - **Contoh Output**
    ```json
    {
        "message": "Feedback received"
    }
    ```
## Penggunaan Model Machine Learning
- **Model** : Model machine learning yang dilatih untuk memprediksi gangguan tidur berdasarkan data yang diberikan
- **Label Encoding** : `Label Encoder` digunakan untuk mengubah label target menjadi format numerik saat pelatihan dan mengembalikannya ke format deskriptif saat prediksi

## Instalasi dan Penggunaan
### Backend
1. **Clone Repository** :
   ```bash
   https://github.com/tobiokagae/GROUP-4-PROJECT-DMML24.git
   cd GROUP-4-PROJECT-DMML24/backend
   ```
2. **Install Dependencies** :
   ```bash
   pip install flask scikit-learn joblib pandas flask-cors
   ```
3. **Run the backend application** :
   ```bash
   python app.py
   ```
### Frontend
1. **Go To Frontend Directory** :
   ```bash
   cd ../frontend
   ```
2. **Install Dependencies** :
   ```bash
   npm install
   ```
3. **Run the frontend application** :
   ```bash
   npm run dev
   ```
### API Request
- Gunakan endpoint `/predict` untuk melakukan prediksi gangguan tidur
- Gunakan endpoint `/feedback` untuk mengirim umpan balik
   
## **Link Dataset**
🔗[Sleep Health and Lifestyle Dataset](https://www.kaggle.com/datasets/uom190346a/sleep-health-and-lifestyle-dataset)
  
## **Report 1**
### **1. Kanban Board**
 ![Report 1](https://github.com/tobiokagae/GROUP-4-PROJECT-DMML24/assets/128783688/3e1aafbf-5a57-402b-82c4-4ca94fa4887e)
 
### **2. Catatan**
 - Pisahkan kode-kode dalam 1 cell menjadi beberapa bagian cell (bagian pengolahan data)
 - Berikan penjelasan dari dilakukannya proses tersebut (bagian pengolahan data)

## **Report 2**
### **1. Kanban Board**
 ![Report 2](https://github.com/tobiokagae/GROUP-4-PROJECT-DMML24/assets/128783688/382a06bd-d2ba-4abe-b222-404b62c512c4)

### **2. Catatan**
 - Uji model-model yang memungkinkan untuk digunakan
 - Perbaiki direktori project

## **Report 3**
### **1. Kanban Board**
 ![Report 3](https://github.com/tobiokagae/GROUP-4-PROJECT-DMML24/assets/113653966/3117cd8c-7d01-47bc-a956-a3c8ab7ca97d)

### **2. Catatan**
