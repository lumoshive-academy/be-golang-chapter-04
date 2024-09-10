# Cara Menginstall Git di Lokal Komputer

Panduan langkah-langkah untuk menginstall Git di komputer lokal Anda, baik untuk Windows, macOS, maupun Linux.

## 1. Instalasi Git di Windows

### Langkah 1: Unduh Git
- Buka situs resmi Git: [Git Downloads](https://git-scm.com/downloads).
- Pilih **Windows** dan unduh installer.

### Langkah 2: Jalankan Installer
- Setelah unduhan selesai, buka file installer yang telah diunduh.
- Ikuti proses instalasi dengan pengaturan default (atau sesuaikan dengan preferensi Anda).
- Pada bagian **Adjusting your PATH environment**, pilih **Use Git from the command line and also from 3rd-party software** untuk menambah Git ke variabel PATH.
- Selesaikan instalasi dengan mengklik **Install** dan **Finish**.

### Langkah 3: Verifikasi Instalasi
- Setelah instalasi selesai, buka **Command Prompt** atau **Git Bash**, lalu jalankan perintah berikut:

```bash
git --version

```

## 2. Instalasi Git di macOS

### Langkah 1: Unduh Git
- Buka Terminal di macOS.
- Instal Git menggunakan Homebrew. Jalankan perintah berikut di Terminal:

```bash
brew install git

```
- Jika Homebrew belum terinstal, kunjungi [brew.sh](https://brew.sh/) untuk menginstal Homebrew terlebih dahulu.

### Langkah 2: Verifikasi Instalasi
- Setelah instalasi selesai, verifikasi dengan menjalankan perintah berikut di Terminal:
```bash
git --version

```

## 3. Instalasi Git di Linux

### Langkah 1: Update Repository
- Buka terminal dan perbarui repository paket:
```bash
sudo apt update

```

### Langkah 2: Instal Git
- Jalankan perintah berikut untuk menginstal Git:
```bash
sudo apt install git

```

### Langkah 2: Verifikasi Instalasi
- Setelah instalasi selesai, verifikasi dengan menjalankan perintah berikut di Terminal:
```bash
git --version

```