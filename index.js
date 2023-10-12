import React, { useRef, useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import { render } from 'react-dom';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const App = () => {
  const documentRef = useRef(null);
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <Document file="somefile.pdf">
      <Page pageNumber={pageNumber} width={800} height={1200} />
    </Document>
  );
};

const MyRow = ({ children }) => {
  return <div className="this is your row">{children}</div>;
};

const MyCol = ({ children }) => {
  return <div className="this is your col">{children}</div>;
};

render(<App />, document.getElementById('root'));
