export function isObjectEmpty(objectName) {
  return (
    objectName &&
    Object.keys(objectName).length === 0 &&
    objectName.constructor === Object
  );
};

export function fetchSectionData(href, setDataFunc) {
  return ()=>{
    fetch(`http://localhost:1337/api/${href}`)
      .then((response) => response.json())
      .then((data) => {
        setDataFunc(data.data.attributes);
      });
  }
}