import Image from "next/image";
import { Fragment } from "react";
import { useAuth } from "@/hooks/useAuth";
import { GoSignOut } from "react-icons/go";
import { Menu, Transition } from "@headlessui/react";
import { FaUserCog, FaUserSecret } from "react-icons/fa";

const MenuItem = ({ children, onClick }) => {
    return (
        <Menu.Item>
            {({ active }) => (
                <button onClick={onClick} className={`${active ? "bg-blue-500 text-white" : "text-black"} flex w-full items-center rounded-md px-2 py-2 gap-2`}>
                    {children}
                </button>
            )}
        </Menu.Item>
    );
};

export default function AuthUser() {
    const { authUser, logout, loading } = useAuth();
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button>
                <Image src="/icons/avatar.png" alt="" className="mt-0.5 rounded-full" width={34} height={34} />
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-300 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                        <MenuItem>
                            <FaUserSecret />
                            {authUser?.displayName ? authUser.displayName : "No Name"}
                        </MenuItem>
                        <MenuItem>
                            <FaUserCog />
                            {authUser?.role ? authUser.role : "No Role"}
                        </MenuItem>
                    </div>
                    <div className="px-1 py-1">
                        <MenuItem onClick={logout}>
                            <GoSignOut />
                            Log out
                        </MenuItem>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
