import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

body {
color: ${({ theme }) => theme.text};
}
.wrapper{
	background: ${({ theme }) => theme.background};
}
.title{
	color: ${({ theme }) => theme.title};
}
.text_grey{
	color: ${({ theme }) => theme.text_grey};
}
.overTitle{
	color: ${({ theme }) => theme.overTitle};
}
.overTitle_blue{
	color: ${({ theme }) => theme.overTitle_blue};
}
.gallery {
	background: ${({ theme }) => theme.backgroundGallery};
}
.header_header__rU6hU:before {
	background: ${({ theme }) => theme.backgroundGallery};
  }
  .header_header__link__k3YNi{
	color: ${({ theme }) => theme.header_text};
  }
  .header_header__menu__1Q40j{
	background: ${({ theme }) => theme.background}; 
  }
  .header_header__burger__dctbW::before, .header_header__burger__dctbW::after {
	background: ${({ theme }) => theme.burger}; 
}
.header_header__burger__dctbW span{
	background: ${({ theme }) => theme.burger}; 
}
.header_header__logo__7wDyU{
	color: ${({ theme }) => theme.title};
}
.feature_feature__content_blue__Naovo{
	background: ${({ theme }) => theme.featureContextBg}; 
}

`