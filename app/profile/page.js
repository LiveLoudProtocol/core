import React from 'react'
import Cover from './components/Cover'
import Details from './components/Details'
import { GridItemEight, GridItemFour, GridLayout } from './layouts/GridLayout'
import FeedType from './layouts/FeedType'
import Feed from '../components/Feed'
import SideBarPlaceHolder from './components/sideBarPlaceHolder'
import RecommendProfileCard from './components/recommendProfileCard'

export default function Profile() {
  return (
    <>
      <SideBarPlaceHolder />
      <Cover />
      <GridLayout className="pt-6">
        <GridItemFour>
          <Details />
          <div className="hidden md:flex  py-4 -px-6 round-lg bg-white  flex-col justify-center">
            <h1 className="text-xl font-bold">Recommend Profiles</h1>
            <h1 className="text-xs my-1 text-gray-600 font-bold">
              Follow New Personolities.
            </h1>
            <div className="my-2  w-full">
              <RecommendProfileCard />
              <RecommendProfileCard />
            </div>
          </div>
        </GridItemFour>
        <GridItemEight className="space-y-1">
          <FeedType />
          <div className="py-8 h-screen md:overflow-y-scroll">
            <Feed />
            <Feed />
            <Feed />
            <Feed />
            <Feed />
          </div>
          {/* {currentProfile?.id === profile?.id ? <NewPost /> : null}
          {feedType === ProfileFeedType.Feed ||
          feedType === ProfileFeedType.Replies ||
          feedType === ProfileFeedType.Media ||
          feedType === ProfileFeedType.Collects ? (
            <Feed profile={profile as Profile} type={feedType} />
          ) : null}
          {feedType === ProfileFeedType.Gallery ? (
            <NftGallery profile={profile as Profile} />
          ) : null}
          {feedType === ProfileFeedType.Stats && IS_MAINNET ? (
            <Achievements profile={profile as Profile} />
          ) : null} */}
        </GridItemEight>
      </GridLayout>
    </>
  )
}
