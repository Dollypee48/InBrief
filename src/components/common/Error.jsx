export default function Error({ message = "Something went wrong. Please try again." }) {
  return (
    <div className="flex items-center justify-center min-h-[200px] text-center">
      <div className="bg-red-100 text-red-700 px-6 py-4 rounded-md shadow-sm max-w-md">
        <p className="font-semibold">Error</p>
        <p className="text-sm mt-1">{message}</p>
      </div>
    </div>
  );
}
