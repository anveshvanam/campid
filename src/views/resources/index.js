import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload, faExternalLink, faFilePdf } from '@fortawesome/free-solid-svg-icons'

import JoinCampID from '../../components/joinCampID'
import './resources.scss'
import StaticHead from '../../components/staticHead'

const Resources = () => {
    return (
        <div className='resourcesMain'>

            <StaticHead title='Resources' />
            <div className='main-container'>
                <div className='resourcesContent'>
                    <p>
                        Utrices molestie magna nec semper. Maecenas velit mi, ultrices quis placerat ut, egestas facilisis mi. Proin vestibulum eu nisl non tincidunt. Fusce ut volutpat ligula, non dictum ex. Quisque libero purus, tincidunt vitae pretium et, tempor euismod elit. Integer interdum, leo ac ornare accumsan, quam erat consectetur neque, in imperdiet sem urna quis mauris. Nunc consequat venenatis blandit. Mauris ultricies ligula lacus, in mollis est sagittis ac. Donec blandit felis quis urna facilisis efficitur.                </p>
                </div>
                <div className="resources-for-main">
                    <div className="resources-for-card">
                        <p className="resources-for-heading">Athletes & Parent Resources</p>
                        <div className="resources-for-points" >
                            <FontAwesomeIcon style={{ color: "#ec6f00" }} icon={faFilePdf} />
                            <p style={{ color: "#ec6f00" }}>Link to a document here</p>
                        </div>
                        <div className="resources-for-points">
                            <FontAwesomeIcon style={{ color: "#ec6f00" }} icon={faFilePdf} />
                            <p style={{ color: "#ec6f00" }}>Link to a document here</p>
                        </div>
                        <div className="resources-for-points">
                            <FontAwesomeIcon style={{ color: "#ec6f00" }} icon={faFilePdf} />

                            <p style={{ color: "#ec6f00" }}>Link to a document here</p>
                        </div>
                        <div className="resources-for-points">
                            <FontAwesomeIcon style={{ color: "#ec6f00" }} icon={faExternalLink} />

                            <p style={{ color: "#ec6f00" }}>Link to a website here</p>
                        </div>
                    </div>
                    <div className="resources-for-card">
                        <p className="resources-for-heading">Camp Director Resources</p>
                        <div className="resources-for-points">
                            <FontAwesomeIcon style={{ color: "#ec6f00" }} icon={faFilePdf} />

                            <p style={{ color: "#ec6f00" }}>Link to a document here</p>
                        </div>
                        <div className="resources-for-points">
                            <FontAwesomeIcon style={{ color: "#ec6f00" }} icon={faFilePdf} />

                            <p style={{ color: "#ec6f00" }}>Link to a document here</p>
                        </div>
                        <div className="resources-for-points">
                            <FontAwesomeIcon style={{ color: "#ec6f00" }} icon={faFilePdf} />

                            <p style={{ color: "#ec6f00" }}>Link to a document here</p>
                        </div>
                        <div className="resources-for-points">
                            <FontAwesomeIcon style={{ color: "#ec6f00" }} icon={faExternalLink} />

                            <p style={{ color: "#ec6f00" }}>Link to a website here</p>
                        </div>
                    </div>
                </div>
                <div className='joinCampIdComponent'>
                    <JoinCampID />
                </div>
            </div>

        </div>
    )
}

export default Resources