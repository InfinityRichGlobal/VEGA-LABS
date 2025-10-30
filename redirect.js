(() => {
  const host = "www.vegalabs.co.th";

  // ดึงชื่อไฟล์จาก URL
  let file = location.pathname.split("/").pop();

  // ✅ ถ้าไม่มีไฟล์ใน path (คือเข้าโฟลเดอร์เฉย ๆ → ให้ไปหน้า domain root)
  if (!file || file === "" || file === "index.html") {
    location.replace(`https://${host}`);
    return;
  }

  // ✅ redirect แบบไฟล์ใครไฟล์มัน
  location.replace(`https://${host}/${file}`);
})();
