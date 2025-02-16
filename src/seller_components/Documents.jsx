import { files, tableFiles } from "../utils/data";
import { IoDocumentSharp } from "react-icons/io5";
import { FaGoogleDrive, FaDropbox } from "react-icons/fa";
import { TbBrandOnedrive } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";


const getFileIcon = (iconName) => {
    const icons = {
        document: <IoDocumentSharp />,
        googleDrive: <FaGoogleDrive />,
        oneDrive: <TbBrandOnedrive />,
        dropbox: <FaDropbox />,
    };
    return icons[iconName] || null;
};

function Documents() {
    return (
        <>
            <h2>Documents</h2>

            <div className="documentGrandParent">
                
                <div className="documentsParent"> 
                    
                    <div className="documents1">
                    
                        {files.map(file => (
                            <div key={file.id} className="documentsChild">
                                <div className="filesData">
                                    <p className="icon">{getFileIcon(file.icon)}</p>
                                    <p><BsThreeDotsVertical /></p>   
                                </div>
                                <h4 className="fileNameChild">{file.name}</h4>
                                <p className="bar"></p>
                                <div className="filesData">
                                    <p>{file.noOfFiles} files</p>
                                    <h5>{file.data}</h5>
                                </div>
                            </div>
                        ))}

                    </div>

                    <div>

                        {/* <div className="orderMore">
                            <h3>Recent Order</h3>
                            <button>See more</button>
                        </div> */}
                            
                            <div className="orderMore">
                            <h3>Recent Order</h3>
                        </div>

                        <table className="tableParent">
                            <thead>
                                <tr>
                                    <th className="tableHeadingChild">File Name</th>
                                    <th className="tableHeadingChild">Date</th>
                                    <th className="tableHeadingChild">Size</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableFiles.map((file) => (
                                    <tr key={file.id} align="center">
                                        <td className="tableDataChild">{file.fileName}</td>
                                        <td className="tableDataChild">{file.date}</td>
                                        <td className="tableDataChild">{file.size}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                    
                </div>
                
                <div className="documents2">
                        <h3>Storage Details</h3>
                        <br />
                        <div className="circle">
                            <p>29.1 of 128GB</p>
                        </div>
                        <div className="sidebar">
                            {files.map(file => (
                                <div key={file.id} className="sidebarChild">
                                    <div>
                                        <p className="sidebarIcon">{getFileIcon(file.icon)}</p>   
                                    </div>
                                    <div>
                                        <p>{file.name}</p>
                                        <p>{file.noOfFiles} files</p>
                                    </div>
                                    <div>
                                        <p>{file.data}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
        </>
    );
}

export default Documents;
