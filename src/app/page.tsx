'use client';
import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home'); // 'home', 'articles', 'good-news'
  const [activeCategory, setActiveCategory] = useState('Бүгд');

  // Sample articles data
  const articles = [
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
      category: "Сургаалт зүйрлэлүүд",
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

  // Filter articles based on active category
  const filteredArticles = activeCategory === 'Бүгд' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight hover:text-blue-600 transition-colors duration-300 cursor-pointer">
            SoonBlog.com
          </h1>
          <nav className="hidden md:flex space-x-10">
            <button 
              onClick={() => {
                setActiveSection('home');
                setActiveCategory('Бүгд');
              }}
              className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                activeSection === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Нүүр
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                activeSection === 'home' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
            <button 
              onClick={() => {
                setActiveSection('articles');
                setActiveCategory('Бүгд');
              }}
              className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                activeSection === 'articles' && activeCategory === 'Бүгд' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Нийтлэл
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                activeSection === 'articles' && activeCategory === 'Бүгд' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
            <button 
              onClick={() => {
                setActiveSection('articles');
                setActiveCategory('Сайн мэдээ');
              }}
              className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                activeSection === 'articles' && activeCategory === 'Сайн мэдээ' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Сайн мэдээ
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                activeSection === 'articles' && activeCategory === 'Сайн мэдээ' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Хайх..." 
                className="px-4 py-2.5 pl-10 border-2 border-gray-200 rounded-full text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 w-64"
              />
              <svg className="absolute left-3 top-3 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Home Sections - Only show on home */}
      {activeSection === 'home' && (
        <>
          {/* Hero Section */}
          <section className="bg-gray-800 py-8 md:py-16">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-6 md:gap-0">
              <div className="w-full md:w-1/2">
                <div className="relative bg-yellow-500 rounded-lg overflow-hidden h-48 md:h-64">
                  <img 
                    src="https://udaxgui.com/wp-content/uploads/2024/03/gospel1.jpeg.webp" 
                    alt="Hero image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-8">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-orange-300 inline-block mb-4 border border-white/20">
                  Онцлох нийтлэл
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                  Төөрсөн хонины сүргээлт зүйрлэл
                </h3>
                <p className="text-gray-300 mb-4 text-base md:text-lg">
                  Бөөний сайн бэ ер хүүхдийн үхэд хүүхэд албад сонгосн зүйрлээний гүн үгнээ хайлаалзых.
                </p>
                <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">26/09/2025</span>
              </div>
            </div>
          </section>

          {/* Categories Section on Home */}
          <section className="py-8 md:py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {activeCategory === 'Бүгд' ? 'Нийтлэлүүд' : activeCategory}
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                {activeCategory === 'Бүгд' 
                  ? 'Сүүлийн үеийн мэдээ, мэдлэг, туршлагууд' 
                  : `${activeCategory} сэдвээр бичигдсэн нийтлэлүүд`
                }
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4"></div>
            </div>
            
            {/* Category Tags */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-2">
              {['Бүгд', 'Advent', 'Үхэл ба амилал', 'Сайн мэдээ', 'Сургаалт зүйрлэлүүд', 'Мөнх үгийн ойлголт', 'Тамын тухай'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Dynamic Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {filteredArticles.map((article, index) => {
                // Category color mapping
                const categoryColors: { [key: string]: string } = {
                  'Сайн мэдээ': 'bg-blue-100 text-blue-600',
                  'Advent': 'bg-purple-100 text-purple-600',
                  'Үхэл ба амилал': 'bg-gray-100 text-gray-600',
                  'Сургаалт зүйрлэлүүд': 'bg-orange-100 text-orange-600',
                  'Мөнх үгийн ойлголт': 'bg-green-100 text-green-600',
                  'Тамын тухай': 'bg-red-100 text-red-600'
                };

                return (
                  <article key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer">
                    <div className="relative h-40 md:h-48 overflow-hidden">
                      <img 
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 md:p-6">
                      <span className={`text-xs px-2 py-1 rounded ${categoryColors[article.category] || 'bg-gray-100 text-gray-600'}`}>
                        {article.category}
                      </span>
                      <h4 className="font-bold text-lg md:text-xl mt-2 mb-2">{article.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        {article.description}
                      </p>
                      <span className="text-xs text-gray-400">{article.date}</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        </>
      )}

      {/* Articles Section - Show when articles is active */}
      {activeSection === 'articles' && (
        <section className="py-8 md:py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {activeCategory === 'Бүгд' ? 'Нийтлэлүүд' : activeCategory}
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                {activeCategory === 'Бүгд' 
                  ? 'Сүүлийн үеийн мэдээ, мэдлэг, туршлагууд' 
                  : `${activeCategory} сэдвээр бичигдсэн нийтлэлүүд`
                }
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4"></div>
            </div>
            
            {/* Category Tags */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-2">
              {['Бүгд', 'Advent', 'Үхэл ба амилал', 'Сайн мэдээ', 'Сургаалт зүйрлэлүүд', 'Мөнх үгийн ойлголт', 'Тамын тухай'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Dynamic Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {filteredArticles.map((article, index) => {
                // Category color mapping
                const categoryColors: { [key: string]: string } = {
                  'Сайн мэдээ': 'bg-blue-100 text-blue-600',
                  'Advent': 'bg-purple-100 text-purple-600',
                  'Үхэл ба амилал': 'bg-gray-100 text-gray-600',
                  'Сургаалт зүйрлэлүүд': 'bg-orange-100 text-orange-600',
                  'Мөнх үгийн ойлголт': 'bg-green-100 text-green-600',
                  'Тамын тухай': 'bg-red-100 text-red-600'
                };

                return (
                  <article key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer">
                    <div className="relative h-40 md:h-48 overflow-hidden">
                      <img 
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 md:p-6">
                      <span className={`text-xs px-2 py-1 rounded ${categoryColors[article.category] || 'bg-gray-100 text-gray-600'}`}>
                        {article.category}
                      </span>
                      <h4 className="font-bold text-lg md:text-xl mt-2 mb-2">{article.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        {article.description}
                      </p>
                      <span className="text-xs text-gray-400">{article.date}</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4">SoonBlog.com</h3>
              <p className="text-gray-400">Иргэл, найдвар, хайрын түүхэн мэдээ блог.</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-bold mb-4">ХОЛБООСУУД</h4>
              <ul className="space-y-2 flex flex-col md:block">
                <li><a href="#" className="text-gray-400 hover:text-white">Нүүр</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Сайн мэдээ</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-6 md:mt-8 pt-4 border-t border-gray-700 text-center text-gray-400">
            <p className="text-gray-400">© 2025 SoonBlog.com. Бүх эрх хуулиар хамгаалагдсан.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
