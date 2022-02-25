import type { NextPage } from 'next'

import BasicLayout from '@/layouts/BasicLayout'

const Profile: NextPage = () => {
  return (
    <BasicLayout requireAuthenticate>
      <div>Welcome! This is your profile page.</div>
    </BasicLayout>
  )
}

export default Profile
