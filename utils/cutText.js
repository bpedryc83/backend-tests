module.exports = (content, maxLength) => {
  if(typeof content !== 'string') return 'Error';
  if(typeof maxLength !== 'number' || (typeof maxLength === 'number' && (maxLength <= 0))) return 'Error';
  if(content.length < 1) return 'Error';
  if(content.length <= maxLength) return content;
  return content.substring(0, content.lastIndexOf(' ', maxLength)) + '...';
};
