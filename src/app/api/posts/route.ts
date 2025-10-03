import { NextRequest, NextResponse } from 'next/server';

// Type for post data
interface PostData {
  title: string;
  description: string;
  category: string;
  image: string;
  date: string;
}

// Get all posts
export async function GET() {
  try {
    // Get the database from the Cloudflare environment
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const db = (process.env as any).DB;
    
    if (!db) {
      // Fallback data if database is not available
      const fallbackPosts = [
        {
          id: 1,
          title: "Шинэ бүтээгээд өнөөгийн махбод хамаагүй",
          description: "Шинэ Брүс Төмөөр \"самбай бийнд\" дурсан. Хөдөө Үрэгжээлт дорсоо\" Брүс Төмөө уншихг. Загварын зааж ажил уншдах зүүрэл мэдээг.",
          category: "Сайн мэдээ",
          date: "26/09/2025",
          image: "https://udaxgui.com/wp-content/uploads/2024/03/gospel1.jpeg.webp"
        },
        {
          id: 2,
          title: "Паулын зөрлөсөн сайн мэдээ",
          description: "Мосегийн хуулиас амт галздаж нэгт Есүс Христ хуулд ёстой Түүний дагажих болтогдоо мэдүүлэх уртаж уул болон.",
          category: "Сайн мэдээ",
          date: "26/09/2025",
          image: "https://udaxgui.com/wp-content/uploads/2024/03/gospel1.jpeg.webp"
        },
        {
          id: 3,
          title: "Хэмжээлшүүд нь хайр иргээл",
          description: "Энэ нь ааргүү бүс хайж хэтэргүүд сөнгөлөн Төөрөн зөрлөгсөн мэдээ нь амьдлыг суулт хэлэлмээр зөөлөн мэндчилх хаар.",
          category: "Сайн мэдээ",
          date: "26/09/2025",
          image: "https://udaxgui.com/wp-content/uploads/2024/03/gospel1.jpeg.webp"
        },
        {
          id: 4,
          title: "Амилалтын найдвар",
          description: "Хэдэгийн амилааний ер итгэлцээд лалко найдваар, амилалт түгээс зэг.",
          category: "Үхэл ба амилал",
          date: "26/09/2025",
          image: "https://udaxgui.com/wp-content/uploads/2024/03/gospel1.jpeg.webp"
        },
        {
          id: 5,
          title: "Төөрсөн хонины сүргээлт зүйрлэл",
          description: "Есүсний хайр бэ ха гүүлгэлний гүүлийг нэ унших андаа сүр энэл зүүлгэлээгүй гүү үзэг хайжаадал.",
          category: "Сургаалт зүйрлэлүүд",
          date: "26/09/2025",
          image: "https://udaxgui.com/wp-content/uploads/2024/03/gospel1.jpeg.webp"
        },
        {
          id: 6,
          title: "Мөний амьдал нийтлэгт",
          description: "Энэ бол миний CloudFlare-д ул заалзагуулсан санаанаас энэ жил амьд нийтлэг аж.",
          category: "Мөнх үгийн ойлголт",
          date: "26/09/2025",
          image: "https://udaxgui.com/wp-content/uploads/2024/03/gospel1.jpeg.webp"
        }
      ];
      return NextResponse.json({ posts: fallbackPosts });
    }

    // Query all posts ordered by created_at descending
    const { results } = await db.prepare('SELECT * FROM posts ORDER BY created_at DESC').all();
    
    return NextResponse.json({ posts: results });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

// Create a new post
export async function POST(request: NextRequest) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const db = (process.env as any).DB;
    
    if (!db) {
      return NextResponse.json({ error: 'Database not available' }, { status: 500 });
    }

    const body: PostData = await request.json();
    const { title, description, category, image, date } = body;

    // Validate required fields
    if (!title || !description || !category || !image || !date) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Insert new post
    const result = await db.prepare(`
      INSERT INTO posts (title, description, category, image, date)
      VALUES (?, ?, ?, ?, ?)
    `).bind(title, description, category, image, date).run();

    if (!result.success) {
      throw new Error('Failed to insert post');
    }

    // Get the created post
    const { results } = await db.prepare('SELECT * FROM posts WHERE id = ?').bind(result.meta.last_row_id).all();
    const newPost = results[0];

    return NextResponse.json({ 
      message: 'Post created successfully', 
      post: newPost 
    }, { status: 201 });
    
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}