import React from "react";
import { NavLink } from "react-router-dom";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { useSelector } from "react-redux";
const Navbar = () => {
  const {user} = useSelector(store=>store.auth);
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 ">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#dd3232]">Scout</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/jobs">Job</NavLink></li>
          <li><NavLink to="/browse">Browser</NavLink></li>
            {/* <li>Home</li>
            <li>Job</li>
            <li>Browser</li> */}
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <NavLink to="/login"><Button variant="outline">Login</Button></NavLink>
              <NavLink to="/signup"><Button className="bg-[#7B4EBB] hover:bg-[#5A2C99]">Signup</Button></NavLink>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger aschild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-2 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Prem Prakash Soni</h4>
                    <p className="text-sm text-muted-foreground">
                      I am a Mern Stack Developer
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2 />
                    <Button variant="link">View Profile</Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
