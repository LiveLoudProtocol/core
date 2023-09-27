import React from 'react'
import Cover from './components/Cover'
import Details from './components/Details'
import { GridItemEight, GridItemFour, GridLayout } from './layouts/GridLayout'
import FeedType from './layouts/FeedType'

export default function page() {
  return (
    <>
    <Cover/>
    <GridLayout className="pt-6">
        <GridItemFour>
          <Details
            // profile={profile as Profile}
            // following={Boolean(following)}
            // setFollowing={setFollowing}
          />
        </GridItemFour>
        <GridItemEight className="space-y-5">
          
          <FeedType  />
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
