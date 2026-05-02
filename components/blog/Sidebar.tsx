export default function Sidebar() {
  return (
    <div className="space-y-6">
      {/* Sort */}
      <div>
        <h3 className="font-semibold mb-2">Sort By</h3>
        <select className="w-full border p-2 rounded">
          <option value="latest">Latest</option>
          <option value="popular">Most Viewed</option>
          <option value="liked">Most Liked</option>
        </select>
      </div>

      {/* Posts per page */}
      <div>
        <h3 className="font-semibold mb-2">Posts per Page</h3>
        <select className="w-full border p-2 rounded">
          <option>5</option>
          <option>10</option>
          <option>20</option>
        </select>
      </div>

      {/* Author */}
      <div>
        <h3 className="font-semibold mb-2">Filter by Author</h3>
        <ul className="space-y-1">
          <li>
            <input type="checkbox" /> Giri
          </li>
          <li>
            <input type="checkbox" /> Admin
          </li>
        </ul>
      </div>

      {/* Tags */}
      <div>
        <h3 className="font-semibold mb-2">Tags</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-gray-200 rounded">Next.js</span>
          <span className="px-2 py-1 bg-gray-200 rounded">Laravel</span>
        </div>
      </div>
    </div>
  );
}
