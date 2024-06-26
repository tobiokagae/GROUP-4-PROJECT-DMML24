# **Sleep Disorder Predictor**
![](https://github.com/tobiokagae/GROUP-4-PROJECT-DMML24/assets/113653966/08a72c31-60b1-4efe-b9eb-3987385a2db7)

## Deskripsi Aplikasi 
Sleep Disorder Predictor adalah aplikasi web yang dirancang untuk membantu pengguna dalam mendiagnosis potensi gangguan tidur berdasarkan data kesehatan dan kebiasaan sehari-hari. Aplikasi ini menggunakan model machine learning yang telah dilatih untuk memprediksi gangguan tidur seperti insomnia, sleep apnea, atau kondisi tidur sehat. Frontend aplikasi ini dibangun menggunakan Next.js, sedangkan backend menggunakan Flask.

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

### Alur Kerja Aplikasi
#### 1. Pengumpulan Data : Pengguna mengisi formulir di frontend Next.js dengan data pribadi dan kesehatan mereka seperti usia, durasi tidur, kualitas tidur, tingkat aktivitas fisik, tingkat stres, kategori BMI, detak jantung, jumlah langkah harian, dan tekanan darah (sistolik dan diastolik).
#### 2. Preprocessing Data : Data yang dikumpulkan dari pengguna dikonversi ke dalam bentuk numerik yang sesuai dengan format yang digunakan saat pelatihan model. Misalnya, gender dikonversi menjadi nilai 0 atau 1, dan kategori BMI juga dikonversi menjadi nilai numerik.
#### 3. Prediksi : Data yang telah diproses kemudian diberikan ke model machine learning di backend Flask untuk memprediksi jenis gangguan tidur yang mungkin dialami oleh pengguna. Model menghasilkan prediksi yang kemudian dikonversi kembali ke label deskriptif (seperti "Healthy Sleep", "Insomnia", "Sleep Apnea").
#### 4. Feedback : Pengguna dapat memberikan umpan balik mengenai prediksi yang diberikan oleh aplikasi, yang kemudian disimpan untuk analisis lebih lanjut.


## **Nama Anggota**
- Andi Alisha Faiqihah - H071221010
- Mahendra Kirana M.B. - H071221058
- Nurul Alya - H071221009
- Rezqia Nurqalbi - H071221025

## **Nama aplikasi web**
**Sleep Disorder Predictor**

## **Link Dataset**
🔗[Sleep Health and Lifestyle Dataset](https://www.kaggle.com/datasets/uom190346a/sleep-health-and-lifestyle-dataset)

## Cara Menjalankan Aplikasi
**1. git clone repository**
```bash
https://github.com/tobiokagae/GROUP-4-PROJECT-DMML24.git
```
**2. Menjalankan BE**
   - cd `direktori git clone/GROUP_4_PROJECT_DMML24/BackEnd`
   - install beberapa modul
      ```bash
      pip install pandas joblib scikit-learn
      ```
   - run server
      ```bash
      python app.py
      ```
   
**3. Menjalankan FE**
   - cd `direktori git clone/GROUP_4_PROJECT_DMML24/FrontEnd`
   - install module yang dibutuhkan :
      ```bash
      npm install
      ```
   - run :
      ```bash
      npm run dev
      ```
     
note : install semua package terlebih dahulu sebelum melakukan data preprocessing & data processing

## Struktur Aplikasi
- Folder `FrontEnd`:
  Berisi kode untuk tampilan Aplikasi Sleep Disorder Predictor dengan menggunakan `Next JS`.
- File `BackEnd/app.py`:
  Berisi skrip untuk mengambil data data yang dikirimkan oleh Frontend menggunakan `Flask`.

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
