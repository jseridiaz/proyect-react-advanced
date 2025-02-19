import { memo } from "react"
import { Helmet } from "react-helmet-async"

const Seo = ({ title, description, url, img }) => {
   return (
      <Helmet>
         <title>{title}</title>
         <meta name='description' content={description} />
         <meta property='og:title' content={title} />
         <meta property='og:type' content='website' />
         <meta property='og:url' content={url} />
         <meta property='og:image' content={img} />
         <meta property='twitter:card' content='mi_imagen_perfil' />
         <meta property='twitter:creator' content='@Daniel_Rivera' />
         <meta property='twitter:title' content={title} />
         <meta property='twitter:description' content={description} />
         <meta property='twitter:image:src' content={img} />
      </Helmet>
   )
}

export default memo(Seo)
