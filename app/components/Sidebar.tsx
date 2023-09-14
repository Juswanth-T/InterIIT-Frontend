interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar ({ isOpen, onClose }: SidebarProps) {
  return (
    <div
      className={`fixed inset-y-0 right-0 w-64 bg-gray-100 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-64'
      } transition-transform ease-in-out duration-300`}
    >

      <div className="p-4">
        {/* Your sidebar content goes here */}

        <div className="flex justify-between">
        <h2 className="text-xl font-semibold ">Sidebar Content</h2>
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-2 rounded-md"
        >
          X
        </button>      
        </div>

      </div>
    </div>
  );
};


