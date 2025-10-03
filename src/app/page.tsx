export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">SoonBlog.com</h1>
          <nav className="flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Нүүр</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Нийтлэл</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Сайн мэдээ</a>
          </nav>
          <div className="flex items-center">
            <input 
              type="text" 
              placeholder="хайх..." 
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-yellow-400 py-16">
        <div className="max-w-6xl mx-auto px-4 flex items-center">
          <div className="w-1/2">
            <div className="bg-yellow-500 p-12 rounded-lg">
              <h2 className="text-6xl font-bold text-gray-800 mb-4">Зүйрлэл</h2>
            </div>
          </div>
          <div className="w-1/2 pl-8">
            <div className="bg-orange-100 px-3 py-1 rounded text-sm text-orange-600 inline-block mb-4">
              Онцлох нийтлэл
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Төөрсөн хонины сүргээлт зүйрлэл
            </h3>
            <p className="text-gray-700 mb-4">
              Бөөний сайн бэ ер хүүхдийн үхэд хүүхэд албад сонгосн зүйрлээний гүн үгнээ хайлаалзых.
            </p>
            <span className="text-sm text-gray-500">26/09/2025</span>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Нийтлэлүүд</h2>
          
          {/* Category Tags */}
          <div className="flex space-x-4 mb-8">
            <span className="bg-blue-500 text-white px-3 py-1 rounded text-sm">Бүгд</span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm">Advent</span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm">Уран бэ амьдрал</span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm">Сайн мэдээ</span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm">Сүргээлт зүйрлэлүүд</span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm">Мааш уулам сонсголт</span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm">Тангаж туухай</span>
          </div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-orange-400 to-orange-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-white text-xl font-bold mb-2">Шинэ бүтээгдэл</h3>
                    <p className="text-white text-lg">эне махбод хамаагүй</p>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  4
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Сайн мэдээ</span>
                <h4 className="font-bold mt-2 mb-2">Шинэ бүтээгээд өнөөгийн махбод хамаагүй</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Шинэ Брүс Төмөөр &ldquo;самбай бийнд&rdquo; дурсан. Хөдөө Үрэгжээлт дорсоо&rdquo; Брүс Төмөө уншихг. Загварын зааж ажил уншдах зүүрэл мэдээг.
                </p>
                <span className="text-xs text-gray-400">26/09/2025</span>
              </div>
            </article>

            {/* Article 2 */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-gray-600 to-gray-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-white text-xl font-bold mb-2">Бид Мосегийн</h3>
                    <p className="text-white text-lg">хуулийг дагах ёстой юу?</p>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Сайн мэдээ</span>
                <h4 className="font-bold mt-2 mb-2">Паулын зөрлөсөн сайн мэдээ</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Мосегийн хуулиас амт галздаж нэгт Есүс Христ хуулд ёстой Түүний дагажих болтогдоо мэдүүлэх уртаж уул болон.
                </p>
                <span className="text-xs text-gray-400">26/09/2025</span>
              </div>
            </article>

            {/* Article 3 */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-yellow-500 to-orange-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-white text-xl font-bold mb-2">Хэмжээлшүүд</h3>
                    <p className="text-white text-lg">хайр иргээл</p>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Сайн мэдээ</span>
                <h4 className="font-bold mt-2 mb-2">Хэмжээлшүүд нь хайр иргээл</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Энэ нь ааргүү бүс хайж хэтэргүүд сөнгөлөн Төөрөн зөрлөгсөн мэдээ нь амьдлыг суулт хэлэлмээр зөөлөн мэндчилх хаар.
                </p>
                <span className="text-xs text-gray-400">26/09/2025</span>
              </div>
            </article>
          </div>

          {/* Bottom Articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Purple Article */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Амилалт</h3>
              </div>
              <div className="p-4">
                <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">Сүргээлт зүйрлэлүүд</span>
                <h4 className="font-bold mt-2 mb-2">Амилалтын найдвар</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Хэдэгийн амилааний ер итгэлцээд лалко найдваар, амилалт түгээс зэг.
                </p>
                <span className="text-xs text-gray-400">26/09/2025</span>
              </div>
            </article>

            {/* Yellow Article */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                <h3 className="text-gray-800 text-2xl font-bold">Зүйрлэл</h3>
              </div>
              <div className="p-4">
                <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">Сүргээлт зүйрлэлүүд</span>
                <h4 className="font-bold mt-2 mb-2">Төөрсөн хонины сүргээлт зүйрлэл</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Есүсний хайр бэ ха гүүлгэлний гүүлийг нэ унших андаа сүр энэл зүүлгэлээгүй гүү үзэг хайжаадал.
                </p>
                <span className="text-xs text-gray-400">26/09/2025</span>
              </div>
            </article>

            {/* Blue Article */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-xl font-bold">&ldquo;МӨНХ&rdquo;</h3>
                  <p className="text-white">гэсэн ойлголт</p>
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Сайн мэдээ</span>
                <h4 className="font-bold mt-2 mb-2">Мөний амьдал нийтлэгт</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Энэ бол миний CloudFlare-д ул заалзагуулсан санаанаас энэ жил амьд нийтлэг аж.
                </p>
                <span className="text-xs text-gray-400">26/09/2025</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4">SoonBlog.com</h3>
              <p className="text-gray-400">Иргэл, найдвар, хайрын түүхэн мэдээ блог.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">ХОЛБООСУУД</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Нүүр</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Сайн мэдээ</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-400">
            <p className="text-gray-400">© 2025 SoonBlog.com. Бүх эрх хуулиар хамгаалагдсан.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
