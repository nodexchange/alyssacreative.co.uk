const TileItem = ({ title }) => (
  <li className="inline-flex items-center space-x-2">
    <svg
      className="flex-shrink-0 w-5 h-5 text-indigo-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor">
      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
    </svg>
    <span className="text-base font-medium text-gray-900">
      {' '}{title}{' '}
    </span>
  </li>
);

export default TileItem;
