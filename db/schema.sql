-- Create posts table for blog
CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    image TEXT NOT NULL,
    date TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data (same as the current static data)
INSERT OR IGNORE INTO posts (id, title, description, category, image, date) VALUES
(1, "Шинэ бүтээгээд өнөөгийн махбод хамаагүй", "Шинэ Брүс Төмөөр \"самбай бийнд\" дурсан. Хөдөө Үрэгжээлт дорсоо\" Брүс Төмөө уншихг. Загварын зааж ажил уншдах зүүрэл мэдээг.", "Сайн мэдээ", "https://udaxgui.com/wp-content/uploads/2024/03/gospel1.jpeg.webp", "26/09/2025"),
(2, "Паулын зөрлөсөн сайн мэдээ", "Мосегийн хуулиас амт галздаж нэгт Есүс Христ хуулд ёстой Түүний дагажих болтогдоо мэдүүлэх уртаж уул болон.", "Сайн мэдээ", "https://udaxgui.com/wp-content/uploads/2024/03/gospel1.jpeg.webp", "26/09/2025"),
(3, "Хэмжээлшүүд нь хайр иргээл", "Энэ нь ааргүү бүс хайж хэтэргүүд сөнгөлөн Төөрөн зөрлөгсөн мэдээ нь амьдлыг суулт хэлэлмээр зөөлөн мэндчилх хаар.", "Сайн мэдээ", "https://udaxgui.com/wp-content/uploads/2024/03/gospel1.jpeg.webp", "26/09/2025"),
(4, "Амилалтын найдвар", "Хэдэгийн амилааний ер итгэлцээд лалко найдваар, амилалт түгээс зэг.", "Сургаалт зүйрлэлүүд", "https://udaxgui.com/wp-content/uploads/2024/03/gospel1.jpeg.webp", "26/09/2025"),
(5, "Төөрсөн хонины сүргээлт зүйрлэл", "Есүсний хайр бэ ха гүүлгэлний гүүлийг нэ унших андаа сүр энэл зүүлгэлээгүй гүү үзэг хайжаадал.", "Сургаалт зүйрлэлүүд", "https://udaxgui.com/wp-content/uploads/2024/03/gospel1.jpeg.webp", "26/09/2025"),
(6, "Мөний амьдал нийтлэгт", "Энэ бол миний CloudFlare-д ул заалзагуулсан санаанаас энэ жил амьд нийтлэг аж.", "Сайн мэдээ", "https://udaxgui.com/wp-content/uploads/2024/03/gospel1.jpeg.webp", "26/09/2025");