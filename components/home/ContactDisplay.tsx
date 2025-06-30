import React from 'react'

export const ContactDisplay = ({className}: {className?: string}) => {
  return (
    <div className={`lg:text-xl ${className || ''}`}>
        {/* <h3><strong>Contact :</strong></h3> */}
        <div>
            <p><strong>Jérôme VIOTTO, président d'Amendonnez Bougez</strong></p>
            {/* <p><strong>Email :</strong> <a href="mailto:jeromeviotto1414@gmail.com">jeromeviotto1414@gmail.com</a></p> */}
            <p><strong>Téléphone :</strong> <a href="tel:0613422072">06 13 42 20 72</a></p>
        </div>
    </div>
  )
}
