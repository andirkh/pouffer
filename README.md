#1. OpenPouffer
Merupakan project free open source, aset 2d tentang kebudayaan Indonesia. Berisi karakter dengan baju adat 34 Provinsi Indonesia (masih on going). Asset 2 dimensi disini bisa kalian gunakan juga untuk tugas sekolah / kuliah, dijadikan produk turunan lainnya seperti game dress-up, packaging, karakter di software apps kalian, dan lain-lain. Boleh juga untuk kepentingan komersil, namun jgn lupa menulis sumbernya :)

Seperti lisensi BY-SA yg lain, Kalian Bebas untuk :
"Share — copy and redistribute the material in any medium or format
Adapt — remix, transform, and build upon the material
for any purpose, even commercially."

	Format : .svg
	Tools yg digunakan :
		- Komputer Windows, OSX, Linux
		- Software Inkscape 0.91

#2. Support
Fork repository ini

This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/.

https://github.com/andirkh/OPENPOUFFER



## Lokalin Web React

> Keterangan : Web client untuk lokalin 2.0, dengan lib React.js 

Petunjuk Menggunakan :
	git clone /*thisrepos*/
    cd lokalin-web-react
	npm install

Cara Development :
	npm run lokalin

Cara Build :
	npm run build
	_file build ada di lokalin-web-react/build/_
    
Cara Ngetest Build :
	npm run serve
    
Cara Hapus Build :
	npm run remove
    
## Informasi :
- File untuk development ada di **src**
- Root File ada di **src/index.js**
- Tiap Page terdapat diwakili tiap container di folder ** src/containers/*.js **. Container adalah bagian logic tiap page.
- Tiap Container memiliki beberapa component. Component adalah bagian View yg modular. Tiap component dibagi berdasarkan kategori di folder ** src/components/*.js **
- API ada di ** src/api/api.js **. Sesuaikan alamat API di _const APIURL_
- jika ada apa-apa, hubungi http://nic.catfiz.com/andirkh



