import React, { useState, useEffect } from "react";
import { fetchUser } from "../../services/user/usersRequest";
import UserLoadingState from "../UserLoadingState";
import UserEmptyState from "../UserEmptyState";
import UserRowInfo from "../UserRowInfo/UserRowInfo";
import { UserInfo } from "../../types/User";
interface UserListingProps {

}

const UserListing:React.FC<UserListingProps> = ({...props}:UserListingProps) => {
  const [users, setUsers] = useState<UserInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      //your code to be executed after 1 second
      fetchUser
        .then((users) => {
          setUsers(users);
          setIsLoading(false);
        })
        .catch((e) => {
          console.log("exception");
        });
    }, 3000);
  }, []);

  return  <React.Fragment>
    {isLoading ? (
      <UserLoadingState />
    ) : users.length > 0 ? (
      users.map((user, index) => <UserRowInfo key={index} user={user} />)
    ) : (
      <UserEmptyState label="Aucun nemo trouver" />
    )}
  </React.Fragment>
 
};
export default UserListing;
