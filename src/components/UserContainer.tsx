import React, { useEffect } from "react";
import { connect, ConnectedProps } from 'react-redux';
import { fetchUsers as fetchUsersRedux } from 'src/redux';
import { RootState } from 'src/redux/store';

const mapStateToProps = (state: RootState) => ({
  userData: state.user
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsersRedux()),
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux;
function UserContainer({ userData, fetchUsers }: Props) {
  useEffect(() => {
    fetchUsers()
  }, [])
  return (
    userData.loading ? (
      <h2>Loading</h2>
    ) : userData.error ? (
      <h2>{userData.error}</h2>
    ) : (
          <div>
            <h2>User List</h2>
            <div>
              {
                userData &&
                userData.users.map(user => <div key={user.id}>{user.email}</div>)
              }
            </div>
          </div>
        )
  )
}
export default connector(UserContainer);
