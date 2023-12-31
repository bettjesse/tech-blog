// export const truncateContent = (content: string | null, maxLength: number): string => {
//     if (content === null) {
//       // Handle null content, you can return an empty string or any default value
//       return '';
//     }
  
//     if (content.length > maxLength) {
//       return content.substring(0, maxLength) + '...'; // Adjust the ellipsis or add a 'Read more' link if needed
//     }
  
//     return content;
//   };
export const truncateContent = (content: string | null | undefined, maxLength: number): string => {
  if (content === null || content === undefined) {
    // Handle null or undefined content, returning an empty string or any default value
    return '';
  }

  if (content.length > maxLength) {
    return content.substring(0, maxLength) + '...'; // Adjust the ellipsis or add a 'Read more' link if needed
  }

  return content;
};
