import React from 'react';
import { Link } from 'react-router-dom';
import appwriteService from '../appwrite/config';
import parse from 'html-react-parser';

const PostCard = ({ $id, title, featuredImage, content }) => {
    const imageUrl = featuredImage
        ? appwriteService.getFilePreview(featuredImage)
        : 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg';

    return (
        <Link to={`/post/${$id}`} className="block">
            <div className="md:w-[20vw] w-[80vw] md:h-[50vh] h-[45vh] bg-gray-100 rounded-xl p-4 overflow-hidden flex flex-col shadow-lg transition-transform duration-300 hover:scale-105">
                
                {/* Image Container */}
                <div className="h-[40%] w-full flex-shrink-0">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>

                {/* Title */}
                <h2 className="text-lg font-semibold mt-3 truncate">{title}</h2>

                {/* Content */}
                <div className="text-gray-700 text-sm overflow-hidden line-clamp-3 mt-2">
                    {parse(content)}
                </div>
            </div>
        </Link>
    );
};

export default PostCard;
