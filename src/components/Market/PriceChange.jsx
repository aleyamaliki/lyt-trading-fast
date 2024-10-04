const PriceChange = ({ change }) => {
    const getColor = () => {
    const changeValue = parseFloat(change);
      if (changeValue > 0) return 'text-green-400';
      if (changeValue < 0) return 'text-red-400';
      return 'text-white';
    };
  
    return (
      <span className={`text-sm ${getColor()}`}>
        {change} %
      </span>
    );
  };
  
  export default PriceChange;