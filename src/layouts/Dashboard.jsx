import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendar, FaFireAlt, FaHome, FaShoppingCart, FaThList, FaUsers, FaUtensils } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import useCart from "../hooks/useCart";
import { GiHamburgerMenu } from "react-icons/gi";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart()
    const [isAdmin] = useAdmin();
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center">

                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content ">

                    {
                        isAdmin ?
                            <>
                                <li><NavLink to='/dashboard/admin-home'><FaHome></FaHome>Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/additem'><FaUtensils></FaUtensils>Add Item</NavLink></li>
                                <li><NavLink to='/dashboard/manage-items'><FaThList></FaThList> Manage Items</NavLink></li>
                                <li><NavLink to='/dashboard/history'><FaBook></FaBook>Manage Bookings</NavLink></li>
                                <li><NavLink to='/dashboard/all-users'><FaUsers></FaUsers>All Users</NavLink></li>
                            </> :

                            <>
                                <li><NavLink to='/dashboard/user-home'><FaHome></FaHome>User Home</NavLink></li>
                                <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar>Reservation</NavLink></li>
                                <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>Payment History</NavLink></li>
                                <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart
                                    <div className="badge">{cart?.length || 0}</div></NavLink></li>
                            </>
                    }

                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/menu'><GiHamburgerMenu></GiHamburgerMenu> Menu</NavLink></li>
                    <li><NavLink to='/order'><FaFireAlt></FaFireAlt>Order</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;