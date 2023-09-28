import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export const MenuItems=[
    {
        title: "Home",
        url:"/",
        classnames: "nav-Links",
        icon:  <HomeRoundedIcon/>
    },
    {
        title: "Contact us",
        url:"/ContactUs",
        classnames: "nav-Links",
        icon: < ContactPageIcon/>
    },
    {
        title: "Login",
        url:"/Login",
        classnames: "nav-Links",
        icon: <PersonIcon/>
    },
    {
        title: "Cart",
        url:"/Cart",
        classnames: "nav-Links",
        icon: <ShoppingCartIcon/>
    }
   
]