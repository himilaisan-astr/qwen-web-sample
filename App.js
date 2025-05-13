import { useState } from 'react';

const App = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dữ liệu bài viết mẫu
  const posts = [
    {
      id: 1,
      title: "Chính trị nóng: Bầu cử tổng thống Mỹ bước vào giai đoạn nước sôi lửa bỏng",
      excerpt: "Cuộc đua vào Nhà Trắng đang trở nên căng thẳng hơn bao giờ hết khi hai ứng viên hàng đầu liên tục tung ra những chiêu thức tranh cử độc đáo.",
      category: "chinh-tri",
      date: "2025-04-03",
      image: "https://placehold.co/600x400?text=Ch ính+Trị+Nóng"
    },
    {
      id: 2,
      title: "Thế giới dậy sóng vì phát hiện kho báu cổ đại tại Ai Cập",
      excerpt: "Các nhà khảo cổ vừa công bố phát hiện một ngôi mộ hoàng gia chưa từng được ghi chép trong sử sách, chứa hàng trăm hiện vật quý giá.",
      category: "the-gioi",
      date: "2025-04-02",
      image: "https://placehold.co/600x400?text=Kh ảo+Cổ+Ai+Cập"
    },
    {
      id: 3,
      title: "Kinh tế Việt Nam tăng trưởng vượt bậc nhờ FDI đổ mạnh vào công nghệ cao",
      excerpt: "Bộ Kế hoạch và Đầu tư vừa công bố báo cáo cho thấy dòng vốn đầu tư trực tiếp nước ngoài (FDI) vào lĩnh vực công nghệ cao đã tăng tới 35% so với năm trước.",
      category: "kinh-te",
      date: "2025-04-01",
      image: "https://placehold.co/600x400?text=T ăng+Trưởng+FDI"
    },
    {
      id: 4,
      title: "Giải trí: Sao Hollywood bị bắt vì dính líu đến đường dây buôn bán ma túy quốc tế",
      excerpt: "Một ngôi sao nổi tiếng của Hollywood vừa bị bắt giữ tại Los Angeles sau khi cảnh sát phát hiện anh ta là mắt xích quan trọng trong một đường dây buôn bán ma túy xuyên quốc gia.",
      category: "giai-tri",
      date: "2025-03-31",
      image: "https://placehold.co/600x400?text=Sao+Hollywood+B ắt"
    },
    {
      id: 5,
      title: "Thể thao: U23 Việt Nam lội ngược dòng đầy cảm hứng trước Thái Lan",
      excerpt: "Trận cầu đinh giữa U23 Việt Nam và U23 Thái Lan đã kết thúc với chiến thắng nghẹt thở 3-2 cho đội tuyển áo đỏ, mang về hy vọng lớn cho người hâm mộ.",
      category: "the-thao",
      date: "2025-03-30",
      image: "https://placehold.co/600x400?text=U23+Vi ệt+Nam"
    },
    {
      id: 6,
      title: "Công nghệ: Apple ra mắt iPhone 17 Pro với chip AI siêu mạnh",
      excerpt: "Apple chính thức trình làng chiếc iPhone 17 Pro mới nhất với khả năng xử lý AI siêu nhanh, biến điện thoại thông minh thành trợ lý cá nhân thực thụ.",
      category: "cong-nghe",
      date: "2025-03-29",
      image: "https://placehold.co/600x400?text=iPhone+17+Pro "
    }
  ];

  // Danh sách danh mục
  const categories = [
    { key: 'all', label: 'Tất cả' },
    { key: 'chinh-tri', label: 'Chính trị' },
    { key: 'the-gioi', label: 'Thế giới' },
    { key: 'kinh-te', label: 'Kinh tế' },
    { key: 'giai-tri', label: 'Giải trí' },
    { key: 'the-thao', label: 'Thể thao' },
    { key: 'cong-nghe', label: 'Công nghệ' }
  ];

  // Lọc bài viết theo tìm kiếm và danh mục
  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="https://placehold.co/40x40?text=BLC " alt="Logo Báo Lá Cải" className="rounded-full" />
            <h1 className="text-2xl font-bold tracking-tight">Báo Lá Cải</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`capitalize transition-colors hover:text-yellow-200 ${activeCategory === cat.key ? 'text-yellow-200 font-semibold' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12"/>
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18"/>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-red-700 p-4 space-y-3 animate-fadeIn">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => {
                  setActiveCategory(cat.key);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left capitalize py-2 px-3 rounded-md transition-colors ${
                  activeCategory === cat.key ? 'bg-orange-500 text-white' : 'hover:bg-red-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Search Bar */}
        <div className="container mx-auto px-4 pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm tin tức..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-transparent focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50 outline-none transition-all"
            />
            <div className="absolute right-3 top-2.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold uppercase bg-red-100 text-red-800 rounded-full">
                    {categories.find(c => c.key === post.category)?.label}
                  </span>
                  <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <time className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString('vi-VN')}</time>
                    <button className="text-red-600 hover:text-red-800 font-medium flex items-center group">
                      Đọc thêm
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                           className="ml-1 transform group-hover:translate-x-1 transition-transform">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <img src="https://placehold.co/200x200?text=Kh ông+có+kết+quả" alt="Không có bài viết" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Không tìm thấy bài viết nào</h3>
              <p className="text-gray-500">Thử điều chỉnh lại từ khóa hoặc chọn danh mục khác.</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src="https://placehold.co/100x100?text=Logo+BLC " alt="Logo Báo Lá Cải" className="mb-4" />
              <p className="text-gray-400 mb-4">Tin tức nóng mỗi ngày - Nhanh, chuẩn xác và có chút hài hước!</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                       className="w-5 h-5">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                       className="w-5 h-5">
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                       className="w-5 h-5">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.11.819-.26.819-.577 0-.284-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.795.825.795 1.695 0 1.23-.012 2.22-.012 2.52 0 .243.162.528.81.445C20.31 21.809 24 17.25 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Danh mục</h3>
              <ul className="space-y-2">
                {categories.map(category => (
                  <li key={category.key}>
                    <button
                      onClick={() => setActiveCategory(category.key)}
                      className="text-gray-400 hover:text-white transition-colors capitalize"
                    >
                      {category.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📧 toasoan@balacai.vn</li>
                <li>📞 (+84) 123 456 789</li>
                <li>📍 123 Đường Tin Tức, Phường Báo Chí, Quận Thông Tin, TP.HCM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Báo Lá Cải - Bản quyền thuộc về chúng tôi.
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default App;
