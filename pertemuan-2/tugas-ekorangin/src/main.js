let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   if (title == "") {
      alert("Inputan masih kosong");
      return;
   }
   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = `flex justify-between items-center mb-2`;
   task.innerHTML = `
         <p class="flex-grow">${title}</p>
         <input type="button" id="btn-selesai" value="SELESAI" data-task="${task.id}"
                class="bg-green-200 text-black font-bold px-3 py-1 rounded-lg mr-2">
         <input type="button" id="btn-hapus" value="HAPUS" data-task="${task.id}"
                class="bg-red-200 text-black font-bold px-3 py-1 rounded-lg">
   `;
   output.appendChild(task);
   input.value = "";
   e.preventDefault();
}
