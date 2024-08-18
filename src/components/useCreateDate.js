const useCreateDate = () => {
  const date = new Date();
  let month = date.getMonth();
  switch (month) {
    case 0:
      month = "Jan";
      break;
    case 1:
      month = "Feb";
      break;
    case 2:
      month = "Mar";
      break;
    case 3:
      month = "Apr";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "Jun";
      break;
    case 6:
      month = "Jul";
      break;
    case 7:
      month = "Aug";
      break;
    case 8:
      month = "Sep";
      break;
    case 9:
      month = "Oct";
      break;
    case 10:
      month = "Nov";
      break;
    case 11:
      month = "Dec";
      break;
    default:
      month = "Unknown"; // Fallback for safety, though it should not be needed
      break;
  }
  
  const dateObj = `${month}, ${date.getDate()} ${date.getFullYear()} [${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}]`;
  return dateObj;
}

export default useCreateDate;
