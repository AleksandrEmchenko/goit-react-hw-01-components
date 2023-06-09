import user from "../components/Profile/user.json";
import { Profile } from "./Profile/Profile";

import data from "../components/Statistics/data.json";
import { Statistics } from "./Statistics/Statistics";

import friends from "../components/Friends/friends.json";
import { FriendList } from "./Friends/FriendList";

import transactions from "../components/TransactionHistory/transactions.json";
import { TransactionHistory } from "./TransactionHistory/Transaction";
export const App = () => (
  <div>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />

    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />

    <FriendList friends={friends} />

    <TransactionHistory items={transactions} />
  </div>
);
