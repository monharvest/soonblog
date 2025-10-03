'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Simple authentication (in production, use proper authentication)
  const ADMIN_PASSWORD = 'soonblog2025'; // Change this to a secure password

  // Form state for new post
  const [newPost, setNewPost] = useState({
    title: '',
    description: '',
    category: 'Сайн мэдээ',
    image: '',
    date: new Date().toLocaleDateString('mn-MN')
  });

  const categories = ['Сайн мэдээ', 'Advent', 'Үхэл ба амилал', 'Сургаалт зүйрлэлүүд', 'Мөнх үгийн ойлголт', 'Тамын тухай'];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication delay
    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        setIsAuthenticated(true);
      } else {
        alert('Буруу нууц үг!');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handlePostSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!newPost.title || !newPost.description || !newPost.image) {
      alert('Бүх талбарыг бөглөнө үү!');
      return;
    }

    setIsLoading(true);

    try {
      // Send post data to API
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        await response.json();
        alert(`Нийтлэл амжилттай нэмэгдлээ!\n\nГарчиг: ${newPost.title}\nАнгилал: ${newPost.category}`);
        
        // Reset form
        setNewPost({
          title: '',
          description: '',
          category: 'Сайн мэдээ',
          image: '',
          date: new Date().toLocaleDateString('mn-MN')
        });
      } else {
        const error: { error?: string } = await response.json();
        alert(`Алдаа гарлаа: ${error.error || 'Тодорхойгүй алдаа'}`);
      }
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Сүлжээний алдаа гарлаа. Дахин оролдоно уу.');
    } finally {
      setIsLoading(false);
    }
  };

  // Login form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-center mb-6">SoonBlog Админ</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Нууц үг
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Нууц үгээ оруулна уу"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Шалгаж байна...' : 'Нэвтрэх'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Admin panel
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">SoonBlog Админ панел</h1>
          <div className="flex gap-4">
            <button
              onClick={() => router.push('/')}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Блог руу буцах
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="text-red-600 hover:text-red-800 font-medium"
            >
              Гарах
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-6">Шинэ нийтлэл нэмэх</h2>
          
          <form onSubmit={handlePostSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Гарчиг *
              </label>
              <input
                type="text"
                value={newPost.title}
                onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Нийтлэлийн гарчиг"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Ангилал *
              </label>
              <select
                value={newPost.category}
                onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Зургийн холбоос *
              </label>
              <input
                type="url"
                value={newPost.image}
                onChange={(e) => setNewPost({...newPost, image: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="https://example.com/image.jpg"
                required
              />
              {newPost.image && (
                <div className="mt-2">
                  <img 
                    src={newPost.image} 
                    alt="Preview" 
                    className="w-32 h-24 object-cover rounded-lg"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Товч агуулга *
              </label>
              <textarea
                value={newPost.description}
                onChange={(e) => setNewPost({...newPost, description: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-32 resize-none"
                placeholder="Нийтлэлийн товч тайлбар..."
                required
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Огноо
              </label>
              <input
                type="text"
                value={newPost.date}
                onChange={(e) => setNewPost({...newPost, date: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="дд/сс/жжжж"
              />
            </div>

            {/* Submit button */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Хадгалж байна...' : 'Нийтлэл нэмэх'}
              </button>
              <button
                type="button"
                onClick={() => setNewPost({
                  title: '',
                  description: '',
                  category: 'Сайн мэдээ',
                  image: '',
                  date: new Date().toLocaleDateString('mn-MN')
                })}
                className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition-colors font-medium"
              >
                Цэвэрлэх
              </button>
            </div>
          </form>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-blue-900 mb-3">Заавар:</h3>
          <ul className="text-blue-800 space-y-2">
            <li>• Бүх шаардлагатай талбарыг (*) тэмдэглэгдсэн талбаруудыг бөглөнө үү</li>
            <li>• Зургийн холбоос нь хүчинтэй байх ёстой</li>
            <li>• Товч агуулга нь 100-200 тэмдэгт байхыг зөвлөж байна</li>
            <li>• Одоогийн хувилбарт нийтлэл консолд хадгалагдана (F12 -&gt; Console)</li>
            <li>• Бодит системд энэ өгөгдөл мэдээллийн санд хадгалагдах болно</li>
          </ul>
        </div>
      </div>
    </div>
  );
}