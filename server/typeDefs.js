const typeDefs = `
  type Query {
    challenge(request: ChallengeRequest!): AuthChallengeResult!
    verify(request: VerifyRequest!): Boolean!
    approvedAuthentications(
      request: ApprovedAuthenticationRequest!
    ): PaginatedApprovedAuthenticationResult!
    currentSession: ApprovedAuthentication!
    ownedHandles(request: OwnedHandlesRequest!): PaginatedHandlesResult!

    # Get all enabled currencies
    currencies(request: PaginatedOffsetRequest!): PaginatedCurrenciesResult!
    feed(request: FeedRequest!): PaginatedFeedResult!
    feedHighlights(
      request: FeedHighlightsRequest!
    ): PaginatedFeedHighlightsResult!
    followers(request: FollowersRequest!): PaginatedProfileResult!

    # Returns a paged list of profiles that are followed by both the observer and the viewing profile
    mutualFollowers(request: MutualFollowersRequest!): PaginatedProfileResult!
    following(request: FollowingRequest!): PaginatedProfileResult!
    followStatusBulk(
      request: FollowStatusBulkRequest!
    ): [FollowStatusBulkResult!]!
    ping: String!
    internalClaimStatus(request: InternalClaimStatusRequest!): Void
    internalCuratedHandles(request: InternalCuratedHandlesRequest!): [String!]!
    internalAllowedDomains(request: InternalAllowedDomainsRequest!): [URI!]!
    internalCuratedTags(request: InternalCuratedTagsRequest!): [String!]!
    internalProfileStatus(request: InternalProfileStatusRequest!): PrfResult!
    internalInvites(request: InternalInvitesRequest!): Int!
    approvedModuleAllowanceAmount(
      request: ApprovedModuleAllowanceAmountRequest!
    ): [ApprovedAllowanceAmountResult!]!
    generateModuleCurrencyApprovalData(
      request: GenerateModuleCurrencyApprovalDataRequest!
    ): GenerateModuleCurrencyApprovalResult!
    supportedOpenActionModules(
      request: SupportedModulesRequest!
    ): PaginatedSupportedModules!
    supportedReferenceModules(
      request: SupportedModulesRequest!
    ): PaginatedSupportedModules!
    supportedOpenActionCollectModules(
      request: SupportedModulesRequest!
    ): PaginatedSupportedModules!
    supportedFollowModules(
      request: SupportedModulesRequest!
    ): PaginatedSupportedModules!
    momokaSubmitters: MomokaSubmittersResult!
    momokaSummary: MomokaSummaryResult!
    momokaTransactions(
      request: MomokaTransactionsRequest!
    ): MomokaTransactionsResult!
    momokaTransaction(request: MomokaTransactionRequest!): MomokaTransaction
    nfts(request: NftsRequest!): PaginatedNftsResult!

    # Get the NFT collections that the given wallet or profileId owns at least one NFT of. Only supports Ethereum and Polygon NFTs. Note excludeFollowers is set to true by default, so the result will not include Lens Follower NFTsunless explicitly requested.
    nftCollections(
      request: NftCollectionsRequest!
    ): PaginatedNftCollectionsResult!

    # Get the NFT collections that the given two profiles own at least one NFT of.
    mutualNftCollections(
      request: MutualNftCollectionsRequest!
    ): PaginatedNftCollectionsResult!

    # Get the Lens Profiles that own NFTs from a given collection.
    nftCollectionOwners(
      request: NftCollectionOwnersRequest!
    ): PaginatedProfileResult!

    # Get the most popular NFT collections. Popularity is based on how many Lens Profiles own NFTs from a given collection.
    popularNftCollections(
      request: PopularNftCollectionsRequest!
    ): PaginatedPopularNftCollectionsResult!
    nftGalleries(request: NftGalleriesRequest!): PaginatedNftGalleriesResult!
    notifications(request: NotificationRequest): PaginatedNotificationResult!
    poaps(request: UserPoapsQueryRequest!): PaginatedPoapTokenResult!
    mutualPoaps(request: MutualPoapsQueryRequest!): PaginatedPoapEventResult!
    poapHolders(request: PoapHoldersQueryRequest!): PaginatedProfileResult!
    poapEvent(request: PoapEventQueryRequest!): PoapEvent
    profiles(request: ProfilesRequest!): PaginatedProfileResult!
    profile(request: ProfileRequest!): Profile
    whoActedOnPublication(
      request: WhoActedOnPublicationRequest!
    ): PaginatedProfileResult!
    profileInterestsOptions: [String!]!

    # The list of profiles that the logged in profile has blocked
    whoHaveBlocked(request: WhoHaveBlockedRequest!): PaginatedProfileResult!
    profileActionHistory(
      request: ProfileActionHistoryRequest!
    ): PaginatedProfileActionHistoryResult!
    lastLoggedInProfile(request: LastLoggedInProfileRequest!): Profile

    # Get the default profile for a given EvmAddress. If no default is explicitly set, you will get the oldest profile owned by the address.
    defaultProfile(request: DefaultProfileRequest!): Profile
    claimableProfiles: ClaimableProfilesResult!
    claimableStatus: ClaimProfileStatusType!
    canClaim(request: CanClaimRequest!): [CanClaimResult!]!
    exploreProfiles(request: ExploreProfilesRequest!): PaginatedProfileResult!
    invitedProfiles: [InvitedResult!]!
    profileAlreadyInvited(request: AlreadyInvitedCheckRequest!): Boolean!
    profileManagers(
      request: ProfileManagersRequest!
    ): PaginatedProfileManagersResult!
    profilesManaged(request: ProfilesManagedRequest!): PaginatedProfileResult!
    profileRecommendations(
      request: ProfileRecommendationsRequest!
    ): PaginatedProfileResult!
    followRevenues(request: FollowRevenueRequest!): FollowRevenueResult!
    searchProfiles(request: ProfileSearchRequest!): PaginatedProfileResult!
    userSigNonces: UserSigNonces!
    lensProtocolVersion: LensProtocolVersion!
    publications(request: PublicationsRequest!): PaginatedPublicationsResult!
    publication(request: PublicationRequest!): AnyPublication
    publicationsTags(
      request: PublicationsTagsRequest
    ): PaginatedPublicationsTagsResult!
    publicationBookmarks(
      request: PublicationBookmarksRequest
    ): PaginatedPublicationsResult!
    whoReactedPublication(
      request: WhoReactedPublicationRequest!
    ): PaginatedWhoReactedResult!
    explorePublications(
      request: ExplorePublicationRequest!
    ): PaginatedExplorePublicationResult!
    validatePublicationMetadata(
      request: ValidatePublicationMetadataRequest!
    ): PublicationValidateMetadataResult!
    revenueFromPublications(
      request: RevenueFromPublicationsRequest!
    ): PaginatedRevenueFromPublicationsResult!
    revenueFromPublication(
      request: RevenueFromPublicationRequest!
    ): PublicationRevenue
    searchPublications(
      request: PublicationSearchRequest!
    ): PaginatedPublicationPrimaryResult!
    relayQueues: [RelayQueueResult!]!
    lensAPIOwnedEOAs: [EvmAddress!]!
    txIdToTxHash(for: TxId!): TxHash
    lensTransactionStatus(
      request: LensTransactionStatusRequest!
    ): LensTransactionResult
  }

  type AuthChallengeResult {
    id: ChallengeId!

    # The text that needs to be signed
    text: String!
  }

  # The challenge id
  scalar ChallengeId

  input ChallengeRequest {
    # The profile ID to initiate a challenge - note if you do not pass this in you be logging in as a wallet and wont be able to use all the features
    for: ProfileId

    # The Ethereum address that will sign the challenge
    signedBy: EvmAddress!
  }

  # ProfileId custom scalar type
  scalar ProfileId

  # evm address type
  scalar EvmAddress

  input VerifyRequest {
    # The access token to verify
    accessToken: Jwt!
  }

  # The jwt token
  scalar Jwt

  type PaginatedApprovedAuthenticationResult {
    items: [ApprovedAuthentication!]!
    pageInfo: PaginatedResultInfo!
  }

  type ApprovedAuthentication {
    authorizationId: UUID!
    browser: String
    device: String
    os: String
    origin: URI
    expiresAt: DateTime!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  # The guid uuid value
  scalar UUID

  # The URI value not this can be used in it can be a https OR different aka ar:// and ipfs://
  scalar URI

  # The javascript "Date" as string. Type represents date and time as the ISO Date string.
  scalar DateTime

  # The paginated result info
  type PaginatedResultInfo {
    # Cursor to query the actual results
    prev: Cursor

    # Cursor to query next results
    next: Cursor
  }

  # Cursor custom scalar type
  scalar Cursor

  input ApprovedAuthenticationRequest {
    limit: LimitType
    cursor: Cursor
  }

  enum LimitType {
    Ten
    TwentyFive
    Fifty
  }

  type PaginatedHandlesResult {
    items: [HandleInfo!]!
    pageInfo: PaginatedResultInfo!
  }

  type HandleInfo {
    # The handle nft token id
    id: TokenId!

    # The full handle - namespace/localname
    fullHandle: Handle!

    # The namespace
    namespace: String!

    # The localname
    localName: String!

    # The suggested format to use on UI for ease but you can innovate and slice and dice as you want
    suggestedFormatted: SuggestedFormattedHandle!

    # If null its not linked to anything
    linkedTo: HandleLinkedTo
    ownedBy: EvmAddress!
  }

  # The NFT token id
  scalar TokenId

  # The handle attached to a profile - note its it own NFT and always identified by its full name
  scalar Handle

  type SuggestedFormattedHandle {
    # The full formatted handle - namespace/@localname
    full: String!

    # The formatted handle - @localname
    localName: String!
  }

  type HandleLinkedTo {
    # The contract address it is linked to
    contract: NetworkAddress!

    # The nft token id it is linked to (this can be the profile Id)
    nftTokenId: TokenId!
  }

  type NetworkAddress {
    address: EvmAddress!
    chainId: ChainId!
  }

  # The chain id
  scalar ChainId

  input OwnedHandlesRequest {
    limit: LimitType
    cursor: Cursor

    # The Ethereum address for which to retrieve owned handles
    for: EvmAddress!
  }

  type PaginatedCurrenciesResult {
    items: [Erc20!]!
    pageInfo: PaginatedResultInfo!
  }

  # The erc20 type
  type Erc20 {
    # Name of the symbol
    name: String!

    # Symbol for the token
    symbol: String!

    # Decimal places for the token
    decimals: Int!

    # The erc20 address
    contract: NetworkAddress!
  }

  # Pagination with Offset fields
  input PaginatedOffsetRequest {
    limit: LimitType
    cursor: Cursor
  }

  type PaginatedFeedResult {
    items: [FeedItem!]!
    pageInfo: PaginatedResultInfo!
  }

  type FeedItem {
    id: String!
    root: PrimaryPublication!
    mirrors: [Mirror!]!
    acted: [OpenActionProfileActed!]!
    reactions: [ReactionEvent!]!
    comments: [Comment!]!
  }

  union PrimaryPublication = Post | Comment | Quote

  type Post {
    id: PublicationId!
    publishedOn: App
    isHidden: Boolean!
    momoka: MomokaInfo
    txHash: TxHash
    createdAt: DateTime!
    by: Profile!
    stats(request: PublicationStatsInput): PublicationStats!
    operations: PublicationOperations!
    metadata: PublicationMetadata!
    isEncrypted: Boolean!
    openActionModules: [OpenActionModule!]
    referenceModule: ReferenceModule
    profilesMentioned: [ProfileMentioned!]!
    hashtagsMentioned: [String!]!
  }

  # Publication id
  scalar PublicationId

  type App {
    id: AppId!
  }

  # The app id
  scalar AppId

  type MomokaInfo {
    proof: MomokaProof!
  }

  # The momoke proof
  scalar MomokaProof

  # The tx hash
  scalar TxHash

  # The Profile
  type Profile {
    # The profile id
    id: ProfileId!

    # Who owns the profile
    ownedBy: NetworkAddress!
    txHash: TxHash!

    # When the profile was created
    createdAt: DateTime!
    stats(request: ProfileStatsArg): ProfileStats!
    operations: ProfileOperations!
    interests: [String!]!
    guardian: ProfileGuardianResult
    invitedBy: Profile

    # The number of invites left
    invitesLeft: Int!

    # The on chain identity
    onchainIdentity: ProfileOnchainIdentity!

    # The profile follow nft address
    followNftAddress: NetworkAddress

    # The profile metadata. You can optionally query profile metadata by app id.
    metadata(
      request: GetProfileMetadataArgs = { useFallback: true }
    ): ProfileMetadata

    # The follow module
    followModule: FollowModule

    # The profile handle - a profile may not have one
    handle: HandleInfo

    # If the profile has got signless enabled
    signless: Boolean!

    # If lens API will sponsor this persons for gasless experience, note they can have signless on but sponsor false which means it be rejected
    sponsor: Boolean!
  }

  # The Profile Stats
  type ProfileStats {
    id: ProfileId!
    followers: Int!
    following: Int!
    comments: Int!
    posts: Int!
    mirrors: Int!
    quotes: Int!
    publications: Int!

    # How many times other profiles have reacted on something this profile did
    reactions(request: ProfileStatsReactionArgs): Int!

    # How many times a profile has reacted on something
    reacted(request: ProfileStatsReactionArgs): Int!
    countOpenActions(request: ProfileStatsCountOpenActionArgs): Int!
  }

  input ProfileStatsReactionArgs {
    type: PublicationReactionType!
  }

  enum PublicationReactionType {
    UPVOTE
    DOWNVOTE
  }

  input ProfileStatsCountOpenActionArgs {
    anyOf: [OpenActionFilter!] = []
  }

  input OpenActionFilter {
    address: EvmAddress
    type: OpenActionModuleType
    category: OpenActionCategoryType
  }

  enum OpenActionModuleType {
    SimpleCollectOpenActionModule
    MultirecipientFeeCollectOpenActionModule
    UnknownOpenActionModule
    LegacyLimitedFeeCollectModule
    LegacyFeeCollectModule
    LegacyLimitedTimedFeeCollectModule
    LegacyTimedFeeCollectModule
    LegacyAaveFeeCollectModule
    LegacyRevertCollectModule
    LegacyFreeCollectModule
    LegacyMultirecipientFeeCollectModule
    LegacyERC4626FeeCollectModule
    LegacySimpleCollectModule
  }

  enum OpenActionCategoryType {
    COLLECT
  }

  input ProfileStatsArg {
    forApps: [AppId!]
    customFilters: [CustomFiltersType!]
  }

  enum CustomFiltersType {
    GARDENERS
  }

  type ProfileOperations {
    id: ProfileId!
    isBlockedByMe: OptimisticStatusResult!
    hasBlockedMe: OptimisticStatusResult!
    isFollowedByMe: OptimisticStatusResult!
    isFollowingMe: OptimisticStatusResult!
    canBlock: Boolean!
    canUnblock: Boolean!
    canFollow: TriStateValue!
    canUnfollow: Boolean!
  }

  type OptimisticStatusResult {
    value: Boolean!
    isFinalisedOnchain: Boolean!
  }

  enum TriStateValue {
    YES
    NO
    UNKNOWN
  }

  type ProfileGuardianResult {
    protected: Boolean!
    cooldownEndsOn: DateTime
  }

  type ProfileOnchainIdentity {
    # The POH status
    proofOfHumanity: Boolean!

    # The ens information
    ens: EnsOnchainIdentity

    # The sybil dot org information
    sybilDotOrg: SybilDotOrgIdentity!

    # The worldcoin identity
    worldcoin: WorldcoinIdentity!
  }

  type EnsOnchainIdentity {
    # The default ens mapped to this address
    name: Ens
  }

  # The ens name
  scalar Ens

  type SybilDotOrgIdentity {
    # The sybil dot org status
    verified: Boolean!
    source: SybilDotOrgIdentitySource
  }

  type SybilDotOrgIdentitySource {
    twitter: SybilDotOrgTwitterIdentity!
  }

  type SybilDotOrgTwitterIdentity {
    handle: String
  }

  type WorldcoinIdentity {
    # If the profile has verified as a user
    isHuman: Boolean!
  }

  type ProfileMetadata {
    # The display name for the profile
    displayName: String

    # The bio for the profile
    bio: Markdown

    # The raw uri for the which the profile metadata was set as
    rawURI: URI!

    # The app that this metadata is displayed on
    appId: AppId

    # Profile Custom attributes
    attributes: [MetadataAttribute!]

    # The picture for the profile
    picture: ProfilePicture

    # The cover picture for the profile
    coverPicture: ImageSet
  }

  # The markdown value
  scalar Markdown

  type MetadataAttribute {
    # The type of the attribute. When:
    # - BOOLEAN: the "value" is "true"|"false"
    # - DATE: the "value" is a valid ISO 8601 date string
    # - NUMBER: the "value" is a valid JS number as string
    # - STRING: the "value" is a string.
    # - JSON: the "value" is a valid JSON serialized as string
    #
    type: MetadataAttributeType!
    key: String!

    # The value serialized as string. It's consumer responsibility to parse it according to "type".
    value: String!
  }

  enum MetadataAttributeType {
    BOOLEAN
    DATE
    NUMBER
    STRING
    JSON
  }

  union ProfilePicture = ImageSet | NftImage

  type ImageSet {
    raw: Image!
    optimized: Image
    transformed(request: ImageTransform!): Image
  }

  type Image {
    # MIME type of the image
    mimeType: MimeType

    # Width of the image
    width: Int

    # Height of the image
    height: Int
    uri: URI!
  }

  # Mimetype type
  scalar MimeType

  input ImageTransform {
    # Set the transformed image's width
    width: ImageSizeTransform = "auto"

    # Set the transformed image's height
    height: ImageSizeTransform = "auto"

    # Set if you want to keep the image's original aspect ratio. True by default. If explicitly set to false, the image will stretch based on the width and height values.
    keepAspectRatio: Boolean = true
  }

  # The image size transform
  scalar ImageSizeTransform

  type NftImage {
    # The contract address of the NFT collection
    collection: NetworkAddress!

    # The token ID of the NFT
    tokenId: TokenId!

    # The image set for the NFT
    image: ImageSet!

    # Indicates whether the NFT is from a verified collection or not
    verified: Boolean!
  }

  input GetProfileMetadataArgs {
    # The app id to query the profile's metadata
    appId: AppId

    # If true, will fallback to global profile metadata, if there is no metadata set for that specific app id
    useFallback: Boolean = true
  }

  union FollowModule =
      FeeFollowModuleSettings
    | RevertFollowModuleSettings
    | UnknownFollowModuleSettings

  type FeeFollowModuleSettings {
    type: FollowModuleType!
    contract: NetworkAddress!

    # The amount info
    amount: Amount!

    # The module recipient address
    recipient: EvmAddress!
  }

  enum FollowModuleType {
    FeeFollowModule
    RevertFollowModule
    UnknownFollowModule
  }

  type Amount {
    # The asset
    asset: Asset!

    # Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal.
    value: String!
    rate(request: RateRequest!): FiatAmount
  }

  union Asset = Erc20

  type FiatAmount {
    asset: Fiat!
    value: String!
  }

  type Fiat {
    name: String!
    symbol: String!
    decimals: Int!
  }

  input RateRequest {
    for: SupportedFiatType!
  }

  enum SupportedFiatType {
    USD
    GBP
    EUR
  }

  type RevertFollowModuleSettings {
    type: FollowModuleType!
    contract: NetworkAddress!
  }

  type UnknownFollowModuleSettings {
    type: FollowModuleType!
    contract: NetworkAddress!

    # The data used to setup the module which you can decode with your known ABI
    followModuleReturnData: BlockchainData
  }

  # Blockchain data
  scalar BlockchainData

  type PublicationStats {
    id: PublicationId!
    comments: Int!
    mirrors: Int!
    quotes: Int!
    reactions(request: PublicationStatsReactionArgs): Int!
    countOpenActions(request: PublicationStatsCountOpenActionArgs): Int!
    bookmarks: Int!
  }

  input PublicationStatsReactionArgs {
    type: PublicationReactionType!
  }

  input PublicationStatsCountOpenActionArgs {
    anyOf: [OpenActionFilter!] = []
  }

  input PublicationStatsInput {
    customFilters: [CustomFiltersType!] = []

    # Filter the returned stats on apps and 1 of the following filters: tags, contentWarning, mainContentFocus, locale
    metadata: PublicationMetadataFilters
  }

  input PublicationMetadataFilters {
    locale: Locale
    contentWarning: PublicationMetadataContentWarningFilter
    mainContentFocus: [PublicationMetadataMainFocusType!]
    tags: PublicationMetadataTagsFilter
    publishedOn: [AppId!]
  }

  # The locale
  scalar Locale

  input PublicationMetadataContentWarningFilter {
    oneOf: [PublicationContentWarningType!]!
  }

  enum PublicationContentWarningType {
    NSFW
    SENSITIVE
    SPOILER
  }

  enum PublicationMetadataMainFocusType {
    VIDEO
    IMAGE
    ARTICLE
    TEXT_ONLY
    AUDIO
    LINK
    EMBED
    CHECKING_IN
    EVENT
    MINT
    TRANSACTION
    LIVESTREAM
    SHORT_VIDEO
    THREE_D
    STORY
    SPACE
  }

  input PublicationMetadataTagsFilter {
    oneOf: [String!]
    all: [String!]
  }

  type PublicationOperations {
    id: PublicationId!
    isNotInterested: Boolean!
    hasBookmarked: Boolean!
    hasReported: Boolean!
    canAct(request: PublicationOperationsActedArgs): TriStateValue!
    hasActed(request: PublicationOperationsActedArgs): OptimisticStatusResult!
    actedOn(request: PublicationOperationsActedArgs): [OpenActionResult!]!
    hasReacted(request: PublicationOperationsReactionArgs): Boolean!
    canComment: TriStateValue!
    canMirror: TriStateValue!
    canQuote: TriStateValue!
    hasQuoted: Boolean!
    hasMirrored: Boolean!
    canDecrypt: CanDecryptResponse!
  }

  input PublicationOperationsActedArgs {
    filter: OpenActionFilter = null
  }

  union OpenActionResult =
      KnownCollectOpenActionResult
    | UnknownOpenActionResult

  type KnownCollectOpenActionResult {
    type: CollectOpenActionModuleType!
  }

  enum CollectOpenActionModuleType {
    SimpleCollectOpenActionModule
    MultirecipientFeeCollectOpenActionModule
    LegacyLimitedFeeCollectModule
    LegacyFeeCollectModule
    LegacyLimitedTimedFeeCollectModule
    LegacyTimedFeeCollectModule
    LegacyAaveFeeCollectModule
    LegacyRevertCollectModule
    LegacyFreeCollectModule
    LegacyMultirecipientFeeCollectModule
    LegacyERC4626FeeCollectModule
    LegacySimpleCollectModule
    UnknownOpenActionModule
  }

  type UnknownOpenActionResult {
    address: EvmAddress!
    category: OpenActionCategoryType
    initReturnData: BlockchainData
  }

  input PublicationOperationsReactionArgs {
    type: PublicationReactionType
  }

  type CanDecryptResponse {
    result: Boolean!
    reasons: [DecryptFailReasonType!]
    extraDetails: String
  }

  enum DecryptFailReasonType {
    NOT_LOGGED_IN
    UNAUTHORIZED_ADDRESS
    DOES_NOT_OWN_NFT
    DOES_NOT_OWN_PROFILE
    DOES_NOT_FOLLOW_PROFILE
    HAS_NOT_COLLECTED_PUBLICATION
    UNAUTHORIZED_BALANCE
    PROFILE_DOES_NOT_EXIST
    MISSING_ENCRYPTION_PARAMS
    FOLLOW_NOT_FINALISED_ON_CHAIN
    COLLECT_NOT_FINALISED_ON_CHAIN
    CAN_NOT_DECRYPT
    PUBLICATION_IS_NOT_GATED
    UNSUPPORTED
  }

  union PublicationMetadata =
      VideoMetadataV3
    | ImageMetadataV3
    | AudioMetadataV3
    | ArticleMetadataV3
    | EventMetadataV3
    | LinkMetadataV3
    | EmbedMetadataV3
    | CheckingInMetadataV3
    | TextOnlyMetadataV3
    | ThreeDMetadataV3
    | StoryMetadataV3
    | TransactionMetadataV3
    | MintMetadataV3
    | SpaceMetadataV3
    | LiveStreamMetadataV3

  type VideoMetadataV3 {
    id: String!
    rawURI: URI!
    locale: Locale!
    tags: [String!]
    contentWarning: PublicationContentWarningType
    hideFromFeed: Boolean!
    appId: AppId
    marketplace: MarketplaceMetadata
    attributes: [MetadataAttribute!]
    encryptedWith: PublicationMetadataEncryptionStrategy
    asset: PublicationMetadataMediaVideo!
    attachments: [PublicationMetadataMedia!]
    isShortVideo: Boolean!

    # The title of the video. Empty if not set.
    title: String!

    # Optional content. Empty if not set.
    content: EncryptableMarkdown!
  }

  type MarketplaceMetadata {
    description: Markdown
    externalURL: URL
    name: String
    attributes: [PublicationMarketplaceMetadataAttribute!]
    image: ImageSet
    animationUrl: URI
  }

  # The url value
  scalar URL

  type PublicationMarketplaceMetadataAttribute {
    displayType: MarketplaceMetadataAttributeDisplayType
    traitType: String
    value: String
  }

  enum MarketplaceMetadataAttributeDisplayType {
    NUMBER
    STRING
    DATE
  }

  union PublicationMetadataEncryptionStrategy = PublicationMetadataLitEncryption

  type PublicationMetadataLitEncryption {
    encryptionKey: ContentEncryptionKey!
    accessCondition: RootCondition!
    encryptedPaths: [EncryptedPath!]!
  }

  # The content encryption key value
  scalar ContentEncryptionKey

  type RootCondition {
    criteria: [SecondTierCondition!]!
  }

  union SecondTierCondition =
      NftOwnershipCondition
    | Erc20OwnershipCondition
    | EoaOwnershipCondition
    | ProfileOwnershipCondition
    | FollowCondition
    | CollectCondition
    | AdvancedContractCondition
    | AndCondition
    | OrCondition

  type NftOwnershipCondition {
    contract: NetworkAddress!
    contractType: NftContractType!
    tokenIds: [TokenId!]
  }

  enum NftContractType {
    ERC721
    ERC1155
  }

  type Erc20OwnershipCondition {
    amount: Amount!
    condition: ComparisonOperatorConditionType!
  }

  enum ComparisonOperatorConditionType {
    EQUAL
    NOT_EQUAL
    GREATER_THAN
    GREATER_THAN_OR_EQUAL
    LESS_THAN
    LESS_THAN_OR_EQUAL
  }

  type EoaOwnershipCondition {
    address: EvmAddress!
  }

  type ProfileOwnershipCondition {
    profileId: ProfileId!
  }

  type FollowCondition {
    follow: ProfileId!
  }

  type CollectCondition {
    publicationId: PublicationId!
    thisPublication: Boolean!
  }

  # Condition that checks if the given on-chain contract function returns true. It only supports view functions
  type AdvancedContractCondition {
    # The address and chain ID of the contract to call
    contract: NetworkAddress!

    # The name of the function to call. Must be included in the provided abi
    functionName: String!

    # The contract ABI. Has to be in human readable single string format containing the signature of the function you want to call. See https://docs.ethers.org/v5/api/utils/abi/fragments/#human-readable-abi for more info
    abi: String!

    # ABI encoded function parameters. In order to represent the address of the person trying to decrypt, you *have* to use the string ":userAddress" as this param represents the decrypting user address. If a param is an array or tuple, it will be in stringified format.
    params: [String!]!

    # The check to perform on the result of the function. In case of boolean outputs, "EQUALS" and "NOT_EQUALS" are supported. For BigNumber outputs, you can use every comparison option
    comparison: ComparisonOperatorConditionType!

    # The value to compare the result of the function against. Can be "true", "false" or a number in string format
    value: String!
  }

  type AndCondition {
    criteria: [ThirdTierCondition!]!
  }

  union ThirdTierCondition =
      NftOwnershipCondition
    | Erc20OwnershipCondition
    | EoaOwnershipCondition
    | ProfileOwnershipCondition
    | AdvancedContractCondition
    | FollowCondition
    | CollectCondition

  type OrCondition {
    criteria: [ThirdTierCondition!]!
  }

  # Define a path of a possibly encrypted property in the Publication Metadata
  scalar EncryptedPath

  type PublicationMetadataMediaVideo {
    video: EncryptableVideoSet!
    cover: EncryptableImageSet
    duration: Int
    license: PublicationMetadataLicenseType

    # Alternative text for the video
    altTag: EncryptableString
    attributes: [MetadataAttribute!]
  }

  type EncryptableVideoSet {
    raw: EncryptableVideo!
    optimized: Video
  }

  type EncryptableVideo {
    mimeType: MimeType
    uri: EncryptableURI!
  }

  # A URI value that could also be encrypted in some circumstances. Check parent nodes to determine if the value is encrypted or ready to use.
  scalar EncryptableURI

  type Video {
    mimeType: MimeType
    uri: URI!
  }

  type EncryptableImageSet {
    raw: EncryptableImage!
    optimized: Image
    transformed(request: ImageTransform!): Image
  }

  type EncryptableImage {
    # MIME type of the image
    mimeType: MimeType

    # Width of the image
    width: Int

    # Height of the image
    height: Int
    uri: EncryptableURI!
  }

  enum PublicationMetadataLicenseType {
    CCO
    CC_BY
    CC_BY_ND
    CC_BY_NC
    TBNL_C_D_PL_Legal
    TBNL_C_DT_PL_Legal
    TBNL_C_ND_PL_Legal
    TBNL_C_D_NPL_Legal
    TBNL_C_DT_NPL_Legal
    TBNL_C_DTSA_PL_Legal
    TBNL_C_DTSA_NPL_Legal
    TBNL_C_ND_NPL_Legal
    TBNL_C_D_PL_Ledger
    TBNL_C_DT_PL_Ledger
    TBNL_C_ND_PL_Ledger
    TBNL_C_D_NPL_Ledger
    TBNL_C_DT_NPL_Ledger
    TBNL_C_DTSA_PL_Ledger
    TBNL_C_DTSA_NPL_Ledger
    TBNL_C_ND_NPL_Ledger
    TBNL_NC_D_PL_Legal
    TBNL_NC_DT_PL_Legal
    TBNL_NC_ND_PL_Legal
    TBNL_NC_D_NPL_Legal
    TBNL_NC_DT_NPL_Legal
    TBNL_NC_DTSA_PL_Legal
    TBNL_NC_DTSA_NPL_Legal
    TBNL_NC_ND_NPL_Legal
    TBNL_NC_D_PL_Ledger
    TBNL_NC_DT_PL_Ledger
    TBNL_NC_ND_PL_Ledger
    TBNL_NC_D_NPL_Ledger
    TBNL_NC_DT_NPL_Ledger
    TBNL_NC_DTSA_PL_Ledger
    TBNL_NC_DTSA_NPL_Ledger
    TBNL_NC_ND_NPL_Ledger
  }

  # A string that could also be encrypted in some circumstances. Check parent nodes to determine if the value is encrypted or ready to use.
  scalar EncryptableString

  union PublicationMetadataMedia =
      PublicationMetadataMediaVideo
    | PublicationMetadataMediaImage
    | PublicationMetadataMediaAudio

  type PublicationMetadataMediaImage {
    image: EncryptableImageSet!
    license: PublicationMetadataLicenseType

    # Alternative text for the image
    altTag: EncryptableString
    attributes: [MetadataAttribute!]
  }

  type PublicationMetadataMediaAudio {
    audio: EncryptableAudioSet!
    attributes: [MetadataAttribute!]
    cover: EncryptableImageSet
    duration: Int
    license: PublicationMetadataLicenseType
    credits: EncryptableString
    artist: EncryptableString
    genre: EncryptableString
    recordLabel: EncryptableString
    lyrics: EncryptableString
  }

  type EncryptableAudioSet {
    raw: EncryptableAudio!
    optimized: Audio
  }

  type EncryptableAudio {
    mimeType: MimeType
    uri: EncryptableURI!
  }

  type Audio {
    mimeType: MimeType
    uri: URI!
  }

  # A Markdown text that could also be encrypted in some circumstances. Check parent nodes to determine if the value is encrypted or ready to use.
  scalar EncryptableMarkdown

  type ImageMetadataV3 {
    id: String!
    rawURI: URI!
    locale: Locale!
    tags: [String!]
    contentWarning: PublicationContentWarningType
    hideFromFeed: Boolean!
    appId: AppId
    marketplace: MarketplaceMetadata
    attributes: [MetadataAttribute!]
    encryptedWith: PublicationMetadataEncryptionStrategy
    asset: PublicationMetadataMediaImage!
    attachments: [PublicationMetadataMedia!]

    # The title of the image. Empty if not set.
    title: String!

    # Optional content. Empty if not set.
    content: EncryptableMarkdown!
  }

  type AudioMetadataV3 {
    id: String!
    rawURI: URI!
    locale: Locale!
    tags: [String!]
    contentWarning: PublicationContentWarningType
    hideFromFeed: Boolean!
    appId: AppId
    marketplace: MarketplaceMetadata
    attributes: [MetadataAttribute!]
    encryptedWith: PublicationMetadataEncryptionStrategy
    asset: PublicationMetadataMediaAudio!
    attachments: [PublicationMetadataMedia!]

    # The title of the audio. Empty if not set.
    title: String!

    # Optional content. Empty if not set.
    content: EncryptableMarkdown!
  }

  type ArticleMetadataV3 {
    id: String!
    rawURI: URI!
    locale: Locale!
    tags: [String!]
    contentWarning: PublicationContentWarningType
    hideFromFeed: Boolean!
    appId: AppId
    marketplace: MarketplaceMetadata
    attributes: [MetadataAttribute!]
    encryptedWith: PublicationMetadataEncryptionStrategy
    content: EncryptableMarkdown!

    # The title of the article. Empty if not set.
    title: String!
    attachments: [PublicationMetadataMedia!]
  }

  type EventMetadataV3 {
    id: String!
    rawURI: URI!
    locale: Locale!
    tags: [String!]
    contentWarning: PublicationContentWarningType
    hideFromFeed: Boolean!
    appId: AppId
    marketplace: MarketplaceMetadata
    attributes: [MetadataAttribute!]
    encryptedWith: PublicationMetadataEncryptionStrategy
    geographic: GeoLocation
    address: PhysicalAddress
    startsAt: EncryptableDateTime!
    endsAt: EncryptableDateTime!
    links: [EncryptableURI!]
    location: EncryptableString!
    attachments: [PublicationMetadataMedia!]

    # The optional title of the event. Empty if not set.
    title: String!

    # Optional content. Empty if not set.
    content: EncryptableMarkdown!
  }

  type GeoLocation {
    # The raw Geo URI of the location. If encrypted "latitude" and "longitude" will be "null"
    rawURI: EncryptableURI!

    # "null" when "rawURI" is encrypted
    latitude: Float

    # "null" when "rawURI" is encrypted
    longitude: Float
  }

  type PhysicalAddress {
    # The full mailing address formatted for display.
    formatted: EncryptableString

    # The street address including house number, street name, P.O. Box, apartment or unit number and extended multi-line address information.
    streetAddress: EncryptableString

    # The city or locality.
    locality: EncryptableString!

    # The state or region.
    region: EncryptableString

    # The zip or postal code.
    postalCode: EncryptableString

    # The country name component.
    country: EncryptableString!
  }

  # An ISO-8610 DateTime that could also be encrypted in some circumstances. Check parent nodes to determine if the value is encrypted or ready to use.
  scalar EncryptableDateTime

  type LinkMetadataV3 {
    id: String!
    rawURI: URI!
    locale: Locale!
    tags: [String!]
    contentWarning: PublicationContentWarningType
    hideFromFeed: Boolean!
    appId: AppId
    marketplace: MarketplaceMetadata
    attributes: [MetadataAttribute!]
    encryptedWith: PublicationMetadataEncryptionStrategy
    sharingLink: EncryptableURI!
    attachments: [PublicationMetadataMedia!]

    # Optional content. Empty if not set.
    content: EncryptableMarkdown!
  }

  type EmbedMetadataV3 {
    id: String!
    rawURI: URI!
    locale: Locale!
    tags: [String!]
    contentWarning: PublicationContentWarningType
    hideFromFeed: Boolean!
    appId: AppId
    marketplace: MarketplaceMetadata
    attributes: [MetadataAttribute!]
    encryptedWith: PublicationMetadataEncryptionStrategy
    embed: EncryptableURI!
    attachments: [PublicationMetadataMedia!]

    # Optional content. Empty if not set.
    content: EncryptableMarkdown!
  }

  type CheckingInMetadataV3 {
    id: String!
    rawURI: URI!
    locale: Locale!
    tags: [String!]
    contentWarning: PublicationContentWarningType
    hideFromFeed: Boolean!
    appId: AppId
    marketplace: MarketplaceMetadata
    attributes: [MetadataAttribute!]
    encryptedWith: PublicationMetadataEncryptionStrategy
    location: EncryptableString!
    geographic: GeoLocation
    address: PhysicalAddress
    attachments: [PublicationMetadataMedia!]

    # Optional content. Empty if not set.
    content: EncryptableMarkdown!
  }

  type TextOnlyMetadataV3 {
    id: String!
    rawURI: URI!
    locale: Locale!
    tags: [String!]
    contentWarning: PublicationContentWarningType
    hideFromFeed: Boolean!
    appId: AppId
    marketplace: MarketplaceMetadata
    attributes: [MetadataAttribute!]
    encryptedWith: PublicationMetadataEncryptionStrategy
    content: EncryptableMarkdown!
  }

  type ThreeDMetadataV3 {
    id: String!
    rawURI: URI!
    locale: Locale!
    tags: [String!]
    contentWarning: PublicationContentWarningType
    hideFromFeed: Boolean!
    appId: AppId
    marketplace: MarketplaceMetadata
    attributes: [MetadataAttribute!]
    encryptedWith: PublicationMetadataEncryptionStrategy
    assets: [ThreeDMetadataV3Asset!]!
    attachments: [PublicationMetadataMedia!]

    # Optional content. Empty if not set.
    content: EncryptableMarkdown!
  }

  type ThreeDMetadataV3Asset {
    uri: EncryptableURI!
    zipPath: String
    playerURL: EncryptableURI!
    format: String!
    license: PublicationMetadataLicenseType
  }

  type StoryMetadataV3 {
    id: String!
    rawURI: URI!
    locale: Locale!
    tags: [String!]
    contentWarning: PublicationContentWarningType
    hideFromFeed: Boolean!
    appId: AppId
    marketplace: MarketplaceMetadata
    attributes: [MetadataAttribute!]
    encryptedWith: PublicationMetadataEncryptionStrategy
    asset: PublicationMetadataMedia!

    # Optional content. Empty if not set.
    content: EncryptableMarkdown!
  }

  type TransactionMetadataV3 {
    id: String!
    rawURI: URI!
    locale: Locale!
    tags: [String!]
    contentWarning: PublicationContentWarningType
    hideFromFeed: Boolean!
    appId: AppId
    marketplace: MarketplaceMetadata
    attributes: [MetadataAttribute!]
    encryptedWith: PublicationMetadataEncryptionStrategy
    type: PublicationMetadataTransactionType!
    txHash: EncryptableTxHash!
    chainId: ChainId!
    attachments: [PublicationMetadataMedia!]

    # Optional content. Empty if not set.
    content: EncryptableMarkdown!
  }

  enum PublicationMetadataTransactionType {
    ERC721
    ERC20
    OTHER
  }

  # The tx hash that could also be encrypted in some circumstances. Check parent nodes to determine if the value is encrypted or ready to use.
  scalar EncryptableTxHash

  type MintMetadataV3 {
    id: String!
    rawURI: URI!
    locale: Locale!
    tags: [String!]
    contentWarning: PublicationContentWarningType
    hideFromFeed: Boolean!
    appId: AppId
    marketplace: MarketplaceMetadata
    attributes: [MetadataAttribute!]
    encryptedWith: PublicationMetadataEncryptionStrategy
    mintLink: EncryptableURI!
    attachments: [PublicationMetadataMedia!]

    # Optional content. Empty if not set.
    content: EncryptableMarkdown!
  }

  type SpaceMetadataV3 {
    id: String!
    rawURI: URI!
    locale: Locale!
    tags: [String!]
    contentWarning: PublicationContentWarningType
    hideFromFeed: Boolean!
    appId: AppId
    marketplace: MarketplaceMetadata
    attributes: [MetadataAttribute!]
    encryptedWith: PublicationMetadataEncryptionStrategy
    title: String!
    link: EncryptableURI!
    startsAt: EncryptableDateTime!
    attachments: [PublicationMetadataMedia!]

    # Optional content. Empty if not set.
    content: EncryptableMarkdown!
  }

  type LiveStreamMetadataV3 {
    id: String!
    rawURI: URI!
    locale: Locale!
    tags: [String!]
    contentWarning: PublicationContentWarningType
    hideFromFeed: Boolean!
    appId: AppId
    marketplace: MarketplaceMetadata
    attributes: [MetadataAttribute!]
    encryptedWith: PublicationMetadataEncryptionStrategy
    startsAt: EncryptableDateTime!

    # Optional end time. Empty if not set.
    endsAt: EncryptableDateTime!
    playbackURL: EncryptableURI!
    liveURL: EncryptableURI!
    checkLiveAPI: EncryptableURI

    # The title of the live-stream. Empty if not set.
    title: String!

    # Optional content. Empty if not set.
    content: EncryptableMarkdown!
    attachments: [PublicationMetadataMedia!]
  }

  union OpenActionModule =
      SimpleCollectOpenActionSettings
    | MultirecipientFeeCollectOpenActionSettings
    | LegacyFreeCollectModuleSettings
    | LegacyFeeCollectModuleSettings
    | LegacyLimitedFeeCollectModuleSettings
    | LegacyLimitedTimedFeeCollectModuleSettings
    | LegacyRevertCollectModuleSettings
    | LegacyTimedFeeCollectModuleSettings
    | LegacyMultirecipientFeeCollectModuleSettings
    | LegacySimpleCollectModuleSettings
    | LegacyERC4626FeeCollectModuleSettings
    | LegacyAaveFeeCollectModuleSettings
    | UnknownOpenActionModuleSettings

  type SimpleCollectOpenActionSettings {
    type: OpenActionModuleType!
    contract: NetworkAddress!

    # The collect module amount info. "Amount.value = 0" in case of free collects.
    amount: Amount!

    # The collect nft address - only deployed on first collect
    collectNft: EvmAddress

    # The maximum number of collects for this publication.
    collectLimit: String

    # True if only followers of publisher may collect the post.
    followerOnly: Boolean!

    # The collect module recipient address
    recipient: EvmAddress!

    # The collect module referral fee
    referralFee: Float!

    # The end timestamp after which collecting is impossible.
    endsAt: DateTime
  }

  type MultirecipientFeeCollectOpenActionSettings {
    type: OpenActionModuleType!
    contract: NetworkAddress!

    # The collect module amount info
    amount: Amount!

    # The collect nft address - only deployed on first collect
    collectNft: EvmAddress

    # The maximum number of collects for this publication.
    collectLimit: String

    # The referral fee associated with this publication.
    referralFee: Float!

    # True if only followers of publisher may collect the post.
    followerOnly: Boolean!

    # The end timestamp after which collecting is impossible.
    endsAt: DateTime

    # Recipient of collect fees.
    recipients: [RecipientDataOutput!]!
  }

  type RecipientDataOutput {
    # Recipient of collect fees.
    recipient: EvmAddress!

    # Split %, should be between 0.01 and 100. Up to 2 decimal points supported. All % should add up to 100
    split: Float!
  }

  type LegacyFreeCollectModuleSettings {
    type: OpenActionModuleType!
    contract: NetworkAddress!

    # The collect nft address - only deployed on first collect
    collectNft: EvmAddress

    # Follower only
    followerOnly: Boolean!
  }

  type LegacyFeeCollectModuleSettings {
    type: OpenActionModuleType!
    contract: NetworkAddress!

    # The collect nft address - only deployed on first collect
    collectNft: EvmAddress

    # The collect module amount info
    amount: Amount!

    # The collect module recipient address
    recipient: EvmAddress!

    # The collect module referral fee
    referralFee: Float!

    # Follower only
    followerOnly: Boolean!
  }

  type LegacyLimitedFeeCollectModuleSettings {
    type: OpenActionModuleType!
    contract: NetworkAddress!

    # The collect nft address - only deployed on first collect
    collectNft: EvmAddress

    # The collect module limit.
    collectLimit: String

    # The collect module amount info
    amount: Amount!

    # The collect module recipient address
    recipient: EvmAddress!

    # The collect module referral fee
    referralFee: Float!

    # Follower only
    followerOnly: Boolean!
  }

  type LegacyLimitedTimedFeeCollectModuleSettings {
    type: OpenActionModuleType!
    contract: NetworkAddress!

    # The collect nft address - only deployed on first collect
    collectNft: EvmAddress

    # The collect module limit
    collectLimit: String

    # The collect module amount info
    amount: Amount!

    # The collect module recipient address
    recipient: EvmAddress!

    # The collect module referral fee
    referralFee: Float!

    # Follower only
    followerOnly: Boolean!

    # The collect module end timestamp
    endTimestamp: DateTime!
  }

  type LegacyRevertCollectModuleSettings {
    type: OpenActionModuleType!
    contract: NetworkAddress!
  }

  type LegacyTimedFeeCollectModuleSettings {
    type: OpenActionModuleType!
    contract: NetworkAddress!

    # The collect nft address - only deployed on first collect
    collectNft: EvmAddress

    # The collect module amount info
    amount: Amount!

    # The collect module recipient address
    recipient: EvmAddress!

    # The collect module referral fee
    referralFee: Float!

    # Follower only
    followerOnly: Boolean!

    # The collect module end timestamp
    endTimestamp: DateTime!
  }

  type LegacyMultirecipientFeeCollectModuleSettings {
    type: OpenActionModuleType!
    contract: NetworkAddress!

    # The collect nft address - only deployed on first collect
    collectNft: EvmAddress

    # The collect module amount info
    amount: Amount!

    # The maximum number of collects for this publication.
    collectLimit: String

    # The referral fee associated with this publication.
    referralFee: Float!

    # True if only followers of publisher may collect the post.
    followerOnly: Boolean!

    # The end timestamp after which collecting is impossible.
    endsAt: DateTime

    # Recipient of collect fees.
    recipients: [RecipientDataOutput!]!
  }

  type LegacySimpleCollectModuleSettings {
    type: OpenActionModuleType!
    contract: NetworkAddress!

    # The collect nft address - only deployed on first collect
    collectNft: EvmAddress

    # The collect module amount info. "Amount.value = 0" in case of free collects.
    amount: Amount!

    # The maximum number of collects for this publication.
    collectLimit: String

    # True if only followers of publisher may collect the post.
    followerOnly: Boolean!

    # The collect module recipient address
    recipient: EvmAddress!

    # The collect module referral fee
    referralFee: Float!

    # The end timestamp after which collecting is impossible.
    endsAt: DateTime
  }

  type LegacyERC4626FeeCollectModuleSettings {
    type: OpenActionModuleType!
    contract: NetworkAddress!

    # The ERC4626 vault address
    vault: NetworkAddress!

    # The collect module amount info
    amount: Amount!

    # The recipient of the ERC4626 vault shares
    recipient: EvmAddress!

    # The maximum number of collects for this publication.
    collectLimit: String

    # The referral fee associated with this publication.
    referralFee: Float!

    # True if only followers of publisher may collect the post.
    followerOnly: Boolean!

    # The end timestamp after which collecting is impossible.
    endsAt: DateTime
  }

  type LegacyAaveFeeCollectModuleSettings {
    type: OpenActionModuleType!
    contract: NetworkAddress!

    # The collect module amount info
    amount: Amount!

    # The maximum number of collects for this publication.
    collectLimit: String

    # The referral fee associated with this publication.
    referralFee: Float!

    # True if only followers of publisher may collect the post.
    followerOnly: Boolean!

    # The end timestamp after which collecting is impossible.
    endsAt: DateTime

    # Recipient of collect fees.
    recipient: EvmAddress!
  }

  type UnknownOpenActionModuleSettings {
    type: OpenActionModuleType!
    contract: NetworkAddress!

    # The collect nft address - only deployed on first collect and if its a collectable open action
    collectNft: EvmAddress

    # The data used to setup the module which you can decode with your known ABI
    openActionModuleReturnData: BlockchainData
  }

  union ReferenceModule =
      LegacyFollowOnlyReferenceModuleSettings
    | FollowOnlyReferenceModuleSettings
    | UnknownReferenceModuleSettings
    | LegacyDegreesOfSeparationReferenceModuleSettings
    | DegreesOfSeparationReferenceModuleSettings

  type LegacyFollowOnlyReferenceModuleSettings {
    type: ReferenceModuleType!
    contract: NetworkAddress!
  }

  enum ReferenceModuleType {
    LegacyFollowerOnlyReferenceModule
    LegacyDegreesOfSeparationReferenceModule
    FollowerOnlyReferenceModule
    DegreesOfSeparationReferenceModule
    UnknownReferenceModule
  }

  type FollowOnlyReferenceModuleSettings {
    type: ReferenceModuleType!
    contract: NetworkAddress!
  }

  type UnknownReferenceModuleSettings {
    type: ReferenceModuleType!
    contract: NetworkAddress!

    # The data used to setup the module which you can decode with your known ABI
    referenceModuleReturnData: BlockchainData
  }

  type LegacyDegreesOfSeparationReferenceModuleSettings {
    type: ReferenceModuleType!
    contract: NetworkAddress!

    # Applied to comments
    commentsRestricted: Boolean!

    # Applied to mirrors
    mirrorsRestricted: Boolean!

    # Degrees of separation
    degreesOfSeparation: Int!
  }

  type DegreesOfSeparationReferenceModuleSettings {
    type: ReferenceModuleType!
    contract: NetworkAddress!

    # Applied to comments
    commentsRestricted: Boolean!

    # Applied to mirrors
    mirrorsRestricted: Boolean!

    # Applied to quotes
    quotesRestricted: Boolean!

    # Who the degree of separation is applied to
    sourceProfileId: ProfileId!

    # Degrees of separation
    degreesOfSeparation: Int!
  }

  type ProfileMentioned {
    profile: Profile!
    snapshotHandleMentioned: HandleInfo!
    stillOwnsHandle: Boolean!
  }

  type Comment {
    id: PublicationId!
    publishedOn: App
    isHidden: Boolean!
    momoka: MomokaInfo
    txHash: TxHash
    createdAt: DateTime!
    by: Profile!
    stats(request: PublicationStatsInput): PublicationStats!
    operations: PublicationOperations!
    metadata: PublicationMetadata!
    isEncrypted: Boolean!
    openActionModules: [OpenActionModule!]
    referenceModule: ReferenceModule
    profilesMentioned: [ProfileMentioned!]!
    hashtagsMentioned: [String!]!
    root: CommentablePublication!
    commentOn: PrimaryPublication!
    firstComment: Comment
  }

  union CommentablePublication = Post | Quote

  type Quote {
    id: PublicationId!
    publishedOn: App
    isHidden: Boolean!
    momoka: MomokaInfo
    txHash: TxHash
    createdAt: DateTime!
    by: Profile!
    stats(request: PublicationStatsInput): PublicationStats!
    operations: PublicationOperations!
    metadata: PublicationMetadata!
    isEncrypted: Boolean!
    openActionModules: [OpenActionModule!]
    referenceModule: ReferenceModule
    profilesMentioned: [ProfileMentioned!]!
    hashtagsMentioned: [String!]!
    quoteOn: PrimaryPublication!
  }

  type Mirror {
    id: PublicationId!
    publishedOn: App
    isHidden: Boolean!
    momoka: MomokaInfo
    txHash: TxHash
    createdAt: DateTime!
    mirrorOn: MirrorablePublication!
    by: Profile!
  }

  union MirrorablePublication = Post | Comment | Quote

  type OpenActionProfileActed {
    by: Profile!
    action: OpenActionResult!
    actedAt: DateTime!
  }

  type ReactionEvent {
    by: Profile!
    reaction: PublicationReactionType!
    createdAt: DateTime!
  }

  input FeedRequest {
    cursor: Cursor
    where: FeedWhere
  }

  input FeedWhere {
    feedEventItemTypes: [FeedEventItemType!]
    metadata: PublicationMetadataFilters
    for: ProfileId
  }

  enum FeedEventItemType {
    POST
    COMMENT
    MIRROR
    QUOTE
    COLLECT
    REACTION
    ACTED
  }

  type PaginatedFeedHighlightsResult {
    items: [FeedHighlight!]!
    pageInfo: PaginatedResultInfo!
  }

  union FeedHighlight = Post | Quote

  input FeedHighlightsRequest {
    limit: LimitType
    cursor: Cursor
    where: FeedHighlightsWhere
  }

  input FeedHighlightsWhere {
    metadata: PublicationMetadataFilters
    for: ProfileId
  }

  # The paginated profile result
  type PaginatedProfileResult {
    items: [Profile!]!
    pageInfo: PaginatedResultInfo!
  }

  input FollowersRequest {
    limit: LimitType
    cursor: Cursor
    of: ProfileId!
  }

  input MutualFollowersRequest {
    limit: LimitType
    cursor: Cursor
    viewing: ProfileId!
    observer: ProfileId!
  }

  input FollowingRequest {
    limit: LimitType
    cursor: Cursor
    for: ProfileId!
  }

  type FollowStatusBulkResult {
    follower: ProfileId!
    profileId: ProfileId!
    status: OptimisticStatusResult!
  }

  input FollowStatusBulkRequest {
    followInfos: [FollowStatusBulk!]!
  }

  input FollowStatusBulk {
    follower: ProfileId!
    profileId: ProfileId!
  }

  # Represents NULL values
  scalar Void

  input InternalClaimStatusRequest {
    secret: String!
    address: EvmAddress!
  }

  input InternalCuratedHandlesRequest {
    secret: String!
  }

  input InternalAllowedDomainsRequest {
    secret: String!
  }

  input InternalCuratedTagsRequest {
    secret: String!
    hhh: String!
  }

  type PrfResult {
    ss: Boolean!
    dd: Boolean!
  }

  input InternalProfileStatusRequest {
    secret: String!
    hhh: String!
  }

  input InternalInvitesRequest {
    secret: String!
    p: ProfileId!
  }

  type ApprovedAllowanceAmountResult {
    moduleName: String!
    moduleContract: NetworkAddress!
    allowance: Amount!
  }

  input ApprovedModuleAllowanceAmountRequest {
    currencies: [EvmAddress!]!
    openActionModules: [OpenActionModuleType!] = []
    unknownOpenActionModules: [EvmAddress!] = []
    followModules: [FollowModuleType!] = []
    unknownFollowModules: [EvmAddress!] = []
    referenceModules: [ReferenceModuleType!] = []
    unknownReferenceModules: [EvmAddress!] = []
  }

  type GenerateModuleCurrencyApprovalResult {
    to: EvmAddress!
    from: EvmAddress!
    data: BlockchainData!
  }

  input GenerateModuleCurrencyApprovalDataRequest {
    allowance: AmountInput!
    module: ModuleCurrencyApproval!
  }

  input AmountInput {
    # The currency
    currency: EvmAddress!

    # Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal.
    value: String!
  }

  input ModuleCurrencyApproval {
    openActionModule: OpenActionModuleType
    unknownOpenActionModule: EvmAddress
    followModule: FollowModuleType
    unknownFollowModule: EvmAddress
    referenceModule: ReferenceModuleType
    unknownReferenceModule: EvmAddress
  }

  type PaginatedSupportedModules {
    items: [SupportedModule!]!
    pageInfo: PaginatedResultInfo!
  }

  union SupportedModule = KnownSupportedModule | UnknownSupportedModule

  type KnownSupportedModule {
    moduleName: String!
    contract: NetworkAddress!
    moduleInput: [ModuleInfo!]!
    redeemInput: [ModuleInfo!]!
    returnDataInput: [ModuleInfo!]!
  }

  type ModuleInfo {
    name: String!
    type: String!
  }

  type UnknownSupportedModule {
    moduleName: String!
    contract: NetworkAddress!
  }

  input SupportedModulesRequest {
    limit: LimitType
    cursor: Cursor
    includeUnknown: Boolean = false
  }

  type MomokaSubmittersResult {
    items: [MomokaSubmitterResult!]!
    pageInfo: PaginatedResultInfo!
  }

  type MomokaSubmitterResult {
    address: EvmAddress!
    name: String!
    totalTransactions: Int!
  }

  type MomokaSummaryResult {
    totalTransactions: Int!
  }

  type MomokaTransactionsResult {
    items: [MomokaTransaction!]!
    pageInfo: PaginatedResultInfo!
  }

  union MomokaTransaction =
      MomokaPostTransaction
    | MomokaCommentTransaction
    | MomokaMirrorTransaction
    | MomokaQuoteTransaction

  type MomokaPostTransaction {
    transactionId: String!
    submitter: EvmAddress!
    createdAt: DateTime!
    app: App
    verificationStatus: MomokaVerificationStatus!
    publication: Post!
  }

  union MomokaVerificationStatus =
      MomokaVerificationStatusSuccess
    | MomokaVerificationStatusFailure

  type MomokaVerificationStatusSuccess {
    verified: Boolean!
  }

  type MomokaVerificationStatusFailure {
    status: MomokaValidatorError!
  }

  enum MomokaValidatorError {
    NO_SIGNATURE_SUBMITTER
    INVALID_SIGNATURE_SUBMITTER
    TIMESTAMP_PROOF_INVALID_SIGNATURE
    TIMESTAMP_PROOF_INVALID_TYPE
    TIMESTAMP_PROOF_INVALID_DA_ID
    TIMESTAMP_PROOF_NOT_SUBMITTER
    CAN_NOT_CONNECT_TO_BUNDLR
    INVALID_TX_ID
    INVALID_FORMATTED_TYPED_DATA
    BLOCK_CANT_BE_READ_FROM_NODE
    DATA_CANT_BE_READ_FROM_NODE
    SIMULATION_NODE_COULD_NOT_RUN
    SIMULATION_FAILED
    EVENT_MISMATCH
    INVALID_EVENT_TIMESTAMP
    INVALID_TYPED_DATA_DEADLINE_TIMESTAMP
    GENERATED_PUBLICATION_ID_MISMATCH
    INVALID_POINTER_SET_NOT_NEEDED
    POINTER_FAILED_VERIFICATION
    NOT_CLOSEST_BLOCK
    BLOCK_TOO_FAR
    PUBLICATION_NO_POINTER
    PUBLICATION_NONE_DA
    PUBLICATION_NONCE_INVALID
    PUBLICATION_SIGNER_NOT_ALLOWED
    CHAIN_SIGNATURE_ALREADY_USED
    POTENTIAL_REORG
    UNKNOWN
  }

  type MomokaCommentTransaction {
    transactionId: String!
    submitter: EvmAddress!
    createdAt: DateTime!
    app: App
    verificationStatus: MomokaVerificationStatus!
    publication: Comment!
    commentOn: PrimaryPublication!
  }

  type MomokaMirrorTransaction {
    transactionId: String!
    submitter: EvmAddress!
    createdAt: DateTime!
    app: App
    verificationStatus: MomokaVerificationStatus!
    publication: Mirror!
    mirrorOn: PrimaryPublication!
  }

  type MomokaQuoteTransaction {
    transactionId: String!
    submitter: EvmAddress!
    createdAt: DateTime!
    app: App
    verificationStatus: MomokaVerificationStatus!
    publication: Quote!
    quoteOn: PrimaryPublication!
  }

  input MomokaTransactionsRequest {
    limit: LimitType
    cursor: Cursor
    for: ProfileId
  }

  input MomokaTransactionRequest {
    # The momoka transaction id or internal publication id
    for: String!
  }

  type PaginatedNftsResult {
    items: [Nft!]!
    pageInfo: PaginatedResultInfo!
  }

  type Nft {
    tokenId: TokenId!
    contentURI: URI!
    contract: NetworkAddress!
    contractType: NftContractType!
    totalSupply: String!
    collection: NftCollection!
    metadata: NftMetadata!
    owner: Owner!
  }

  # Nft Collection type
  type NftCollection {
    # The contract info, address and chain id
    contract: NetworkAddress!

    # Collection name
    name: String!

    # Collection symbol
    symbol: String!

    # Collection base URI for token metadata
    baseUri: URI

    # Collection ERC type
    contractType: NftContractType!

    # Collection verified status
    verified: Boolean!
  }

  type NftMetadata {
    description: Markdown
    externalURL: URL
    name: String
    attributes: [PublicationMarketplaceMetadataAttribute!]
    image: ImageSet
    animationUrl: URI
  }

  type Owner {
    amount: String!
    address: EvmAddress!
  }

  input NftsRequest {
    limit: LimitType
    cursor: Cursor
    where: NftsRequestWhere
  }

  input NftsRequestWhere {
    # Search query. Has to be part of a collection name
    query: String

    # Profile ID of the owner
    forProfileId: ProfileId = null

    # Ethereum address of the owner. If unknown you can also search by profile ID
    forAddress: EvmAddress = null

    # Chain IDs to search. Supports Ethereum and Polygon. If omitted, it will search in both chains
    chainIds: [ChainId!] = [1, 137]

    # Exclude follower NFTs from the search
    excludeFollowers: Boolean = true
    includeCollections: [NetworkAddressInput!] = []
    excludeCollections: [NetworkAddressInput!] = []
  }

  input NetworkAddressInput {
    address: EvmAddress!
    chainId: ChainId!
  }

  # Nft collections paginated result
  type PaginatedNftCollectionsResult {
    items: [NftCollection!]!
    pageInfo: PaginatedResultInfo!
  }

  # NFT collections request
  input NftCollectionsRequest {
    limit: LimitType
    cursor: Cursor

    # Filter by owner address
    forAddress: EvmAddress
    for: ProfileId

    # The chain ids to look for NFTs on. Ethereum and Polygon are supported. If omitted, it will look on both chains by default.
    chainIds: [ChainId!] = [1, 137]

    # Exclude Lens Follower NFTs
    excludeFollowers: Boolean = true
  }

  # Mutual NFT collections request
  input MutualNftCollectionsRequest {
    limit: LimitType
    cursor: Cursor

    # Profile id of the first user
    observer: ProfileId!

    # Profile id of the second user
    viewing: ProfileId!
  }

  # NFT collection owners request
  input NftCollectionOwnersRequest {
    limit: LimitType
    cursor: Cursor

    # The contract address
    for: EvmAddress!

    # The chain id
    chainId: ChainId!

    # The ordering of Nft collection owners
    order: NftCollectionOwnersOrder = None

    # The profile id to use when ordering by followers
    by: ProfileId = null
  }

  enum NftCollectionOwnersOrder {
    FollowersFirst
    None
  }

  # Popular Nft collections paginated result
  type PaginatedPopularNftCollectionsResult {
    items: [NftCollectionWithOwners!]!
    pageInfo: PaginatedResultInfo!
  }

  # A wrapper object containing an Nft collection, the total number of Lens profiles that own it, and optional field resolvers
  type NftCollectionWithOwners {
    # The Nft collection
    collection: NftCollection!

    # The total number of Lens profile owners that have at least 1 NFT from this collection
    totalOwners: Float!
  }

  # Popular NFT collections request
  input PopularNftCollectionsRequest {
    limit: LimitType
    cursor: Cursor

    # The chain ids to look for NFTs on. Ethereum and Polygon are supported. If omitted, it will look on both chains by default.
    chainIds: [ChainId!] = [1, 137]

    # Exclude Lens Follower NFTs
    excludeFollowers: Boolean = true

    # Include only verified collections
    onlyVerified: Boolean = true

    # The ordering of Nft collection owners. Defaults to Total Lens Profile owners
    orderBy: PopularNftCollectionsOrder = TotalLensProfileOwners
  }

  enum PopularNftCollectionsOrder {
    TotalOwners
    TotalLensProfileOwners
  }

  type PaginatedNftGalleriesResult {
    items: [NftGallery!]!
    pageInfo: PaginatedResultInfo!
  }

  type NftGallery {
    id: NftGalleryId!
    name: NftGalleryName!
    owner: ProfileId!
    items: [Nft!]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  # Nft gallery id type
  scalar NftGalleryId

  # Nft gallery name type
  scalar NftGalleryName

  input NftGalleriesRequest {
    limit: LimitType
    cursor: Cursor
    for: ProfileId!
  }

  type PaginatedNotificationResult {
    items: [Notification!]!
    pageInfo: PaginatedResultInfo!
  }

  union Notification =
      ReactionNotification
    | CommentNotification
    | MirrorNotification
    | QuoteNotification
    | ActedNotification
    | FollowNotification
    | MentionNotification

  type ReactionNotification {
    id: UUID!
    reactions: [ProfileReactedResult!]!
    publication: PrimaryPublication!
  }

  type ProfileReactedResult {
    profile: Profile!
    reactions: [ReactedResult!]!
  }

  type ReactedResult {
    reaction: PublicationReactionType!
    reactedAt: DateTime!
  }

  type CommentNotification {
    id: UUID!
    comment: Comment!
  }

  type MirrorNotification {
    id: UUID!
    mirrors: [ProfileMirrorResult!]!
    publication: PrimaryPublication!
  }

  type ProfileMirrorResult {
    mirrorId: PublicationId!
    mirroredAt: DateTime!
    profile: Profile!
  }

  type QuoteNotification {
    id: UUID!
    quote: Quote!
  }

  type ActedNotification {
    id: UUID!
    actions: [OpenActionProfileActed!]!
    publication: AnyPublication!
  }

  union AnyPublication = Post | Comment | Mirror | Quote

  type FollowNotification {
    id: UUID!
    followers: [Profile!]!
  }

  type MentionNotification {
    id: UUID!
    publication: PrimaryPublication!
  }

  input NotificationRequest {
    cursor: Cursor
    where: NotificationWhere
  }

  input NotificationWhere {
    publishedOn: [AppId!]
    customFilters: [CustomFiltersType!]
    highSignalFilter: Boolean = true
    notificationTypes: [NotificationType!]
  }

  enum NotificationType {
    MIRRORED
    QUOTED
    COMMENTED
    FOLLOWED
    MENTIONED
    REACTED
    ACTED
  }

  # The paginated Poap Token Results
  type PaginatedPoapTokenResult {
    items: [PoapToken!]!
    pageInfo: PaginatedResultInfo!
  }

  # The Poap Token Event
  type PoapToken {
    tokenId: TokenId!

    # Poap Event Id
    eventId: PoapEventId!
    owner: NetworkAddress!

    # Which network the token is: L1 (eth) or L2 (Gnosis)
    layer: PoapTokenLayerType!
    created: DateTime!

    # migrated to L1 at
    migrated: DateTime
    event: PoapEvent!
  }

  # The Poap Event id
  scalar PoapEventId

  enum PoapTokenLayerType {
    Layer1
    Layer2
  }

  # The POAP Event result
  type PoapEvent {
    id: PoapEventId!
    fancyId: String
    name: String
    eventUrl: URL
    imageUrl: URL
    country: String
    city: String
    description: String
    year: Int
    startDate: DateTime
    endDate: DateTime
    expiryDate: DateTime
    virtualEvent: Boolean
    fromAdmin: Boolean
    animationUrl: URL
    eventTemplateId: Int
    privateEvent: Boolean
  }

  input UserPoapsQueryRequest {
    limit: LimitType
    cursor: Cursor
    for: ProfileId!
  }

  # The paginated Poap Events result
  type PaginatedPoapEventResult {
    items: [PoapEvent!]!
    pageInfo: PaginatedResultInfo!
  }

  input MutualPoapsQueryRequest {
    limit: LimitType
    cursor: Cursor
    observer: ProfileId!
    viewing: ProfileId!
  }

  input PoapHoldersQueryRequest {
    limit: LimitType
    cursor: Cursor
    eventId: PoapEventId!
  }

  input PoapEventQueryRequest {
    eventId: PoapEventId!
  }

  input ProfilesRequest {
    limit: LimitType
    cursor: Cursor

    # The where clause to use to filter on what you are looking for
    where: ProfilesRequestWhere!
  }

  input ProfilesRequestWhere {
    # Pass in an array of evm address to get the profile entities they own
    ownedBy: [EvmAddress!]

    # Pass in an array of profile ids to get the profile entities
    profileIds: [ProfileId!]

    # Pass in an array of handles to get the profile entities
    handles: [Handle!]

    # Pass the publication id and get a list of the profiles who quoted it
    whoQuotedPublication: PublicationId

    # Pass the publication id and get a list of the profiles who mirrored it
    whoMirroredPublication: PublicationId

    # Pass the publication id and get a list of the profiles who commented on it
    whoCommentedOn: PublicationId
  }

  input ProfileRequest {
    # The profile you want to fetch
    forProfileId: ProfileId

    # The handle for profile you want to fetch - namespace/localname
    forHandle: Handle
  }

  input WhoActedOnPublicationRequest {
    limit: LimitType
    cursor: Cursor
    on: PublicationId!
    where: WhoActedOnPublicationWhere
  }

  input WhoActedOnPublicationWhere {
    anyOf: [OpenActionFilter!]!
  }

  input WhoHaveBlockedRequest {
    limit: LimitType
    cursor: Cursor
  }

  type PaginatedProfileActionHistoryResult {
    items: [ProfileActionHistory!]!
    pageInfo: PaginatedResultInfo!
  }

  # The Profile
  type ProfileActionHistory {
    id: Float!
    actionType: ProfileActionHistoryType!
    who: EvmAddress!
    txHash: TxHash
    actionedOn: DateTime!
  }

  # Profile action history type
  enum ProfileActionHistoryType {
    FOLLOW
    UNFOLLOW
    LINK_HANDLE
    UNLINK_HANDLE
    SET_PROFILE_MODULE
    BLOCKED
    UNBLOCKED
    SET_PROFILE_METADATA
    ACTED
    COLLECTED
    COMMENT
    MIRROR
    QUOTE
    POST
    LOGGED_IN
    REFRESH_AUTH_TOKEN
  }

  input ProfileActionHistoryRequest {
    limit: LimitType
    cursor: Cursor
  }

  input LastLoggedInProfileRequest {
    for: EvmAddress!
  }

  input DefaultProfileRequest {
    for: EvmAddress!
  }

  type ClaimableProfilesResult {
    reserved: [ReservedClaimable!]!
    canMintProfileWithFreeTextHandle: Boolean!
  }

  type ReservedClaimable {
    id: String!

    # The full handle - namespace/localname
    withHandle: Handle!
    source: AppId!
    expiry: DateTime!
  }

  enum ClaimProfileStatusType {
    ALREADY_CLAIMED
    CLAIM_FAILED
    NOT_CLAIMED
  }

  type CanClaimResult {
    address: EvmAddress!
    canClaim: Boolean!
  }

  input CanClaimRequest {
    addresses: [EvmAddress!]!
  }

  input ExploreProfilesRequest {
    limit: LimitType
    cursor: Cursor

    # Filtering criteria for exploring profiles
    where: ExploreProfilesWhere

    # Order criteria for exploring profiles
    orderBy: ExploreProfilesOrderByType!
  }

  input ExploreProfilesWhere {
    # Filter profiles created since the specified timestamp
    since: UnixTimestamp

    # Array of custom filters for exploring profiles
    customFilters: [CustomFiltersType!] = []
  }

  # The unix timestamp
  scalar UnixTimestamp

  # Possible sort criteria for exploring profiles
  enum ExploreProfilesOrderByType {
    CREATED_ON
    MOST_FOLLOWERS
    LATEST_CREATED
    MOST_POSTS
    MOST_COMMENTS
    MOST_MIRRORS
    MOST_PUBLICATION
    MOST_COLLECTS
  }

  type InvitedResult {
    by: EvmAddress!
    profileMinted: Profile
    when: DateTime!
  }

  input AlreadyInvitedCheckRequest {
    for: EvmAddress!
  }

  # The paginated profile managers result
  type PaginatedProfileManagersResult {
    items: [ProfilesManagedResult!]!
    pageInfo: PaginatedResultInfo!
  }

  type ProfilesManagedResult {
    address: EvmAddress!
    isLensManager: Boolean!
  }

  input ProfileManagersRequest {
    limit: LimitType
    cursor: Cursor

    # The profile ID for which to retrieve managers
    for: ProfileId!
  }

  input ProfilesManagedRequest {
    limit: LimitType
    cursor: Cursor

    # The Ethereum address for which to retrieve managed profiles
    for: EvmAddress!
    includeOwned: Boolean = true
  }

  input ProfileRecommendationsRequest {
    limit: LimitType
    cursor: Cursor

    # Filter based on a specific profile ID
    for: ProfileId!

    # Disable machine learning recommendations (default: false)
    disableML: Boolean = false

    # Shuffle the recommendations (default: false)
    shuffle: Boolean = false
  }

  type FollowRevenueResult {
    revenues: [RevenueAggregate!]!
  }

  type RevenueAggregate {
    total: Amount!
  }

  input FollowRevenueRequest {
    for: ProfileId!
  }

  input ProfileSearchRequest {
    limit: LimitType
    cursor: Cursor

    # Query for the profile search
    query: String!

    # Filtering criteria for profile search
    where: ProfileSearchWhere
  }

  input ProfileSearchWhere {
    # Array of custom filters for profile search
    customFilters: [CustomFiltersType!]
  }

  type UserSigNonces {
    lensHubOnchainSigNonce: Nonce!
    lensTokenHandleRegistryOnchainSigNonce: Nonce!
    lensPublicActProxyOnchainSigNonce: Nonce!
  }

  # The nonce value
  scalar Nonce

  enum LensProtocolVersion {
    V1
    V2
  }

  type PaginatedPublicationsResult {
    items: [AnyPublication!]!
    pageInfo: PaginatedResultInfo!
  }

  input PublicationsRequest {
    limit: LimitType
    cursor: Cursor
    where: PublicationsWhere!
  }

  input PublicationsWhere {
    publicationIds: [PublicationId!]
    from: [ProfileId!]
    publicationTypes: [PublicationType!]
    commentOn: PublicationCommentOn
    mirrorOn: PublicationId
    quoteOn: PublicationId
    withOpenActions: [OpenActionFilter!]
    actedBy: ProfileId
    metadata: PublicationMetadataFilters
    customFilters: [CustomFiltersType!]
  }

  enum PublicationType {
    POST
    COMMENT
    QUOTE
    MIRROR
  }

  input PublicationCommentOn {
    id: PublicationId!
    ranking: PublicationCommentOnRanking
  }

  input PublicationCommentOnRanking {
    filter: CommentRankingFilterType = ALL
  }

  enum CommentRankingFilterType {
    ALL
    NONE_RELEVANT
    RELEVANT
  }

  input PublicationRequest {
    forId: PublicationId
    forTxHash: TxHash
  }

  type PaginatedPublicationsTagsResult {
    items: [TagResult!]!
    pageInfo: PaginatedResultInfo!
  }

  type TagResult {
    tag: String!
    total: Int!
  }

  input PublicationsTagsRequest {
    limit: LimitType
    cursor: Cursor
    where: PublicationsTagsWhere
    orderBy: TagSortCriteriaType = MOST_POPULAR
  }

  input PublicationsTagsWhere {
    publishedOn: [AppId!]
  }

  enum TagSortCriteriaType {
    MOST_POPULAR
    ALPHABETICAL
  }

  input PublicationBookmarksRequest {
    limit: LimitType
    cursor: Cursor
    where: PublicationBookmarksWhere
  }

  input PublicationBookmarksWhere {
    metadata: PublicationMetadataFilters
  }

  type PaginatedWhoReactedResult {
    items: [ProfileWhoReactedResult!]!
    pageInfo: PaginatedResultInfo!
  }

  type ProfileWhoReactedResult {
    profile: Profile!
    reactions: [ProfileReactionResult!]!
  }

  # The reaction details for a publication
  type ProfileReactionResult {
    # The reaction
    reaction: PublicationReactionType!

    # The reaction date
    reactionAt: DateTime!
  }

  input WhoReactedPublicationRequest {
    limit: LimitType
    cursor: Cursor
    for: PublicationId!
    where: WhoReactedPublicationWhere
  }

  input WhoReactedPublicationWhere {
    anyOf: [PublicationReactionType!]
  }

  type PaginatedExplorePublicationResult {
    items: [ExplorePublication!]!
    pageInfo: PaginatedResultInfo!
  }

  union ExplorePublication = Post | Quote

  input ExplorePublicationRequest {
    limit: LimitType
    cursor: Cursor
    where: ExplorePublicationsWhere
    orderBy: ExplorePublicationsOrderByType!
  }

  input ExplorePublicationsWhere {
    since: UnixTimestamp
    publicationTypes: [ExplorePublicationType!]
    customFilters: [CustomFiltersType!]
    metadata: PublicationMetadataFilters
  }

  enum ExplorePublicationType {
    POST
    QUOTE
  }

  enum ExplorePublicationsOrderByType {
    TOP_COMMENTED
    TOP_COLLECTED_OPEN_ACTION
    TOP_MIRRORED
    TOP_QUOTED
    LATEST
    LENS_CURATED
  }

  type PublicationValidateMetadataResult {
    valid: Boolean!
    reason: String
  }

  input ValidatePublicationMetadataRequest {
    rawURI: URI
    json: String
  }

  type PaginatedRevenueFromPublicationsResult {
    items: [PublicationRevenue!]!
    pageInfo: PaginatedResultInfo!
  }

  type PublicationRevenue {
    publication: AnyPublication!
    revenue: [RevenueAggregate!]!
  }

  input RevenueFromPublicationsRequest {
    limit: LimitType
    cursor: Cursor

    # The profile to get revenue for
    for: ProfileId!

    # Will return revenue for publications made on any of the provided app ids. Will include all apps if omitted
    publishedOn: [AppId!]
  }

  input RevenueFromPublicationRequest {
    for: PublicationId!

    # Will return revenue for publications made on any of the provided app ids. Will include all apps if omitted
    publishedOn: [AppId!]
  }

  type PaginatedPublicationPrimaryResult {
    items: [PrimaryPublication!]!
    pageInfo: PaginatedResultInfo!
  }

  input PublicationSearchRequest {
    limit: LimitType
    cursor: Cursor
    where: PublicationSearchWhere
    query: String!
  }

  input PublicationSearchWhere {
    customFilters: [CustomFiltersType!]
    metadata: PublicationMetadataFilters
    publicationTypes: [SearchPublicationType!]
  }

  enum SearchPublicationType {
    POST
    QUOTE
    COMMENT
  }

  type RelayQueueResult {
    key: RelayRoleKey!
    relay: NetworkAddress!
    queue: Int!
  }

  enum RelayRoleKey {
    CREATE_PROFILE
    LENS_MANAGER_1
    LENS_MANAGER_2
    LENS_MANAGER_3
    LENS_MANAGER_4
    LENS_MANAGER_5
    LENS_MANAGER_6
    LENS_MANAGER_7
    LENS_MANAGER_8
    LENS_MANAGER_9
    LENS_MANAGER_10
    WITH_SIG_1
    WITH_SIG_2
    WITH_SIG_3
    WITH_SIG_4
    WITH_SIG_5
    WITH_SIG_6
    WITH_SIG_7
    WITH_SIG_8
    WITH_SIG_9
    WITH_SIG_10
  }

  # The tx id
  scalar TxId

  type LensTransactionResult {
    status: LensTransactionStatusType!
    txHash: TxHash!
    reason: LensTransactionFailureType
    extraInfo: String
  }

  enum LensTransactionStatusType {
    PROCESSING
    OPTIMISTICALLY_UPDATED
    COMPLETE
    FAILED
  }

  enum LensTransactionFailureType {
    REVERTED
    METADATA_ERROR
  }

  input LensTransactionStatusRequest {
    # Transaction hash for retrieving transaction status
    forTxHash: TxHash

    # Transaction ID for retrieving transaction status when using the broadcaster
    forTxId: TxId
  }

  type Mutation {
    authenticate(request: SignedAuthChallenge!): AuthenticationResult!
    refresh(request: RefreshRequest!): AuthenticationResult!
    revokeAuthentication(request: RevokeAuthenticationRequest!): Void
    walletAuthenticationToProfileAuthentication(
      request: WalletAuthenticationToProfileAuthenticationRequest!
    ): AuthenticationResult!
    linkHandleToProfile(
      request: LinkHandleToProfileRequest!
    ): LensProfileManagerRelayResult!
    unlinkHandleFromProfile(
      request: UnlinkHandleFromProfileRequest!
    ): LensProfileManagerRelayResult!
    createLinkHandleToProfileTypedData(
      options: TypedDataOptions
      request: LinkHandleToProfileRequest!
    ): CreateLinkHandleToProfileBroadcastItemResult!
    createUnlinkHandleFromProfileTypedData(
      options: TypedDataOptions
      request: UnlinkHandleFromProfileRequest!
    ): CreateUnlinkHandleFromProfileBroadcastItemResult!
    broadcastOnMomoka(request: BroadcastRequest!): BroadcastMomokaResult!
    broadcastOnchain(request: BroadcastRequest!): RelayResult!
    follow(request: FollowLensManagerRequest!): LensProfileManagerRelayResult!
    unfollow(request: UnfollowRequest!): LensProfileManagerRelayResult!
    createFollowTypedData(
      options: TypedDataOptions
      request: FollowRequest!
    ): CreateFollowBroadcastItemResult!
    createUnfollowTypedData(
      options: TypedDataOptions
      request: UnfollowRequest!
    ): CreateUnfollowBroadcastItemResult!
    internalClaim(request: InternalClaimRequest!): Void
    internalCuratedUpdate(request: InternalCuratedUpdateRequest!): Void
    internalAllowDomain(request: InternalAllowDomainRequest!): Void
    internalAddCuratedTag(request: InternalAddCuratedTagRequest!): Void
    internalRemoveCuratedTag(request: InternalRemoveCuratedTagRequest!): Void
    internalUpdateProfileStatus(
      request: InternalUpdateProfileStatusRequest!
    ): Void
    internalNftIndex(request: InternalNftIndexRequest!): Void
    internalNftVerify(request: InternalNftVerifyRequest!): Void
    internalAddInvites(request: InternalAddInvitesRequest!): Void
    setFollowModule(
      request: SetFollowModuleRequest!
    ): LensProfileManagerRelayResult!
    actOnOpenAction(
      request: ActOnOpenActionLensManagerRequest!
    ): LensProfileManagerRelayResult!
    legacyCollect(
      request: LegacyCollectRequest!
    ): LensProfileManagerRelayResult!
    createSetFollowModuleTypedData(
      options: TypedDataOptions
      request: SetFollowModuleRequest!
    ): CreateSetFollowModuleBroadcastItemResult!
    createActOnOpenActionTypedData(
      options: TypedDataOptions
      request: ActOnOpenActionRequest!
    ): CreateActOnOpenActionBroadcastItemResult!
    createLegacyCollectTypedData(
      options: TypedDataOptions
      request: LegacyCollectRequest!
    ): CreateLegacyCollectBroadcastItemResult!
    postOnMomoka(request: MomokaPostRequest!): RelayMomokaResult!
    commentOnMomoka(request: MomokaCommentRequest!): RelayMomokaResult!
    quoteOnMomoka(request: MomokaQuoteRequest!): RelayMomokaResult!
    mirrorOnMomoka(request: MomokaMirrorRequest!): RelayMomokaResult!
    createMomokaQuoteTypedData(
      request: MomokaQuoteRequest!
    ): CreateMomokaQuoteBroadcastItemResult!
    createMomokaPostTypedData(
      request: MomokaPostRequest!
    ): CreateMomokaPostBroadcastItemResult!
    createMomokaCommentTypedData(
      request: MomokaCommentRequest!
    ): CreateMomokaCommentBroadcastItemResult!
    createMomokaMirrorTypedData(
      request: MomokaMirrorRequest!
    ): CreateMomokaMirrorBroadcastItemResult!
    createNftGallery(request: NftGalleryCreateRequest!): NftGalleryId!
    updateNftGalleryInfo(request: NftGalleryUpdateInfoRequest!): Void
    updateNftGalleryOrder(request: NftGalleryUpdateItemOrderRequest!): Void
    updateNftGalleryItems(request: NftGalleryUpdateItemsRequest!): Void
    deleteNftGallery(request: NftGalleryDeleteRequest!): Void
    nftOwnershipChallenge(
      request: NftOwnershipChallengeRequest!
    ): NftOwnershipChallengeResult!
    addProfileInterests(request: ProfileInterestsRequest!): Void
    removeProfileInterests(request: ProfileInterestsRequest!): Void
    dismissRecommendedProfiles(
      request: DismissRecommendedProfilesRequest!
    ): Void
    setDefaultProfile(request: SetDefaultProfileRequest!): Void
    claimProfileWithHandle(
      request: ClaimProfileWithHandleRequest!
    ): ClaimProfileWithHandleResult!
    invite(request: InviteRequest!): Void
    block(request: BlockRequest!): LensProfileManagerRelayResult!
    unblock(request: UnblockRequest!): LensProfileManagerRelayResult!
    setProfileMetadata(
      request: OnchainSetProfileMetadataRequest!
    ): LensProfileManagerRelayResult!
    createOnchainSetProfileMetadataTypedData(
      options: TypedDataOptions
      request: OnchainSetProfileMetadataRequest!
    ): CreateOnchainSetProfileMetadataBroadcastItemResult!
    createChangeProfileManagersTypedData(
      options: TypedDataOptions
      request: ChangeProfileManagersRequest!
    ): CreateChangeProfileManagersBroadcastItemResult!
    createBlockProfilesTypedData(
      options: TypedDataOptions
      request: BlockRequest!
    ): CreateBlockProfilesBroadcastItemResult!
    createUnblockProfilesTypedData(
      options: TypedDataOptions
      request: UnblockRequest!
    ): CreateUnblockProfilesBroadcastItemResult!
    hidePublication(request: HidePublicationRequest!): Void
    addPublicationNotInterested(request: PublicationNotInterestedRequest!): Void
    undoPublicationNotInterested(
      request: PublicationNotInterestedRequest!
    ): Void
    addPublicationBookmark(request: PublicationBookmarkRequest!): Void
    removePublicationBookmark(request: PublicationBookmarkRequest!): Void
    addReaction(request: ReactionRequest!): Void
    removeReaction(request: ReactionRequest!): Void
    reportPublication(request: ReportPublicationRequest!): Void
    postOnchain(request: OnchainPostRequest!): LensProfileManagerRelayResult!
    commentOnchain(
      request: OnchainCommentRequest!
    ): LensProfileManagerRelayResult!
    quoteOnchain(request: OnchainQuoteRequest!): LensProfileManagerRelayResult!
    mirrorOnchain(
      request: OnchainMirrorRequest!
    ): LensProfileManagerRelayResult!
    refreshPublicationMetadata(
      request: RefreshPublicationMetadataRequest!
    ): RefreshPublicationMetadataResult!
    createOnchainPostTypedData(
      options: TypedDataOptions
      request: OnchainPostRequest!
    ): CreateOnchainPostBroadcastItemResult!
    createOnchainCommentTypedData(
      options: TypedDataOptions
      request: OnchainCommentRequest!
    ): CreateOnchainCommentBroadcastItemResult!
    createOnchainQuoteTypedData(
      options: TypedDataOptions
      request: OnchainQuoteRequest!
    ): CreateOnchainQuoteBroadcastItemResult!
    createOnchainMirrorTypedData(
      options: TypedDataOptions
      request: OnchainMirrorRequest!
    ): CreateOnchainMirrorBroadcastItemResult!
    idKitPhoneVerifyWebhook(
      request: IdKitPhoneVerifyWebhookRequest!
    ): IdKitPhoneVerifyWebhookResultStatusType!
  }

  # The authentication result
  type AuthenticationResult {
    # The access token
    accessToken: Jwt!

    # The refresh token
    refreshToken: Jwt!
  }

  # The signed auth challenge
  input SignedAuthChallenge {
    id: ChallengeId!

    # The signature
    signature: Signature!
  }

  # The signature value
  scalar Signature

  # The refresh request
  input RefreshRequest {
    # The refresh token
    refreshToken: Jwt!
  }

  input RevokeAuthenticationRequest {
    # The token authorization id wish to revoke
    authorizationId: UUID!
  }

  input WalletAuthenticationToProfileAuthenticationRequest {
    # This can convert a wallet token to a profile token if you now onboarded
    profileId: ProfileId!
  }

  union LensProfileManagerRelayResult =
      RelaySuccess
    | LensProfileManagerRelayError

  type RelaySuccess {
    txHash: TxHash
    txId: TxId!
  }

  type LensProfileManagerRelayError {
    reason: LensProfileManagerRelayErrorReasonType!
  }

  enum LensProfileManagerRelayErrorReasonType {
    NOT_SPONSORED
    NO_LENS_MANAGER_ENABLED
    RATE_LIMITED
    FAILED
    APP_NOT_ALLOWED
    REQUIRES_SIGNATURE
  }

  input LinkHandleToProfileRequest {
    # The full handle - namespace/localname
    handle: Handle!
  }

  input UnlinkHandleFromProfileRequest {
    # The full handle - namespace/localname
    handle: Handle!
  }

  type CreateLinkHandleToProfileBroadcastItemResult {
    # This broadcast item ID
    id: BroadcastId!

    # The date the broadcast item expiries
    expiresAt: DateTime!

    # The typed data
    typedData: CreateLinkHandleToProfileEIP712TypedData!
  }

  # The broadcast id
  scalar BroadcastId

  type CreateLinkHandleToProfileEIP712TypedData {
    # The types
    types: CreateLinkHandleToProfileEIP712TypedDataTypes!

    # The typed data domain
    domain: EIP712TypedDataDomain!

    # The values
    value: CreateLinkHandleToProfileEIP712TypedDataValue!
  }

  type CreateLinkHandleToProfileEIP712TypedDataTypes {
    Link: [EIP712TypedDataField!]!
  }

  # The eip 712 typed data field
  type EIP712TypedDataField {
    # The name of the typed data field
    name: String!

    # The type of the typed data field
    type: String!
  }

  # The eip 712 typed data domain
  type EIP712TypedDataDomain {
    # The name of the typed data domain
    name: String!

    # The chainId
    chainId: ChainId!

    # The version
    version: String!

    # The verifying contract
    verifyingContract: EvmAddress!
  }

  type CreateLinkHandleToProfileEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    profileId: ProfileId!
    handleId: TokenId!
  }

  input TypedDataOptions {
    # If you wish to override the nonce for the sig if you want to do some clever stuff in the client
    overrideSigNonce: Nonce!
  }

  type CreateUnlinkHandleFromProfileBroadcastItemResult {
    # This broadcast item ID
    id: BroadcastId!

    # The date the broadcast item expiries
    expiresAt: DateTime!

    # The typed data
    typedData: CreateUnlinkHandleFromProfileEIP712TypedData!
  }

  type CreateUnlinkHandleFromProfileEIP712TypedData {
    # The types
    types: CreateUnlinkHandleFromProfileEIP712TypedDataTypes!

    # The typed data domain
    domain: EIP712TypedDataDomain!

    # The values
    value: CreateUnlinkHandleFromProfileEIP712TypedDataValue!
  }

  type CreateUnlinkHandleFromProfileEIP712TypedDataTypes {
    Unlink: [EIP712TypedDataField!]!
  }

  type CreateUnlinkHandleFromProfileEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    profileId: ProfileId!
    handleId: TokenId!
  }

  union BroadcastMomokaResult = CreateMomokaPublicationResult | RelayError

  type CreateMomokaPublicationResult {
    id: PublicationId!
    proof: MomokaProof!
    momokaId: MomokaId!
  }

  # The momoke id
  scalar MomokaId

  type RelayError {
    reason: RelayErrorReasonType!
  }

  enum RelayErrorReasonType {
    NOT_SPONSORED
    RATE_LIMITED
    FAILED
    EXPIRED
    WRONG_WALLET_SIGNED
    APP_NOT_ALLOWED
  }

  input BroadcastRequest {
    id: BroadcastId!
    signature: Signature!
  }

  union RelayResult = RelaySuccess | RelayError

  input FollowLensManagerRequest {
    follow: [FollowLensManager!]!
  }

  input FollowLensManager {
    profileId: ProfileId!
    followModule: FollowLensManagerModuleRedeemInput
  }

  # The lens manager will only support FREE follow modules, if you want your unknown module allowed to be signless please contact us
  input FollowLensManagerModuleRedeemInput {
    unknownFollowModule: UnknownFollowModuleRedeemInput
  }

  input UnknownFollowModuleRedeemInput {
    address: EvmAddress!
    data: BlockchainData!
  }

  input UnfollowRequest {
    unfollow: [ProfileId!]!
  }

  type CreateFollowBroadcastItemResult {
    # This broadcast item ID
    id: BroadcastId!

    # The date the broadcast item expiries
    expiresAt: DateTime!

    # The typed data
    typedData: CreateFollowEIP712TypedData!
  }

  # The create follow eip 712 typed data
  type CreateFollowEIP712TypedData {
    # The types
    types: CreateFollowEIP712TypedDataTypes!

    # The typed data domain
    domain: EIP712TypedDataDomain!

    # The values
    value: CreateFollowEIP712TypedDataValue!
  }

  # The create follow eip 712 typed data types
  type CreateFollowEIP712TypedDataTypes {
    Follow: [EIP712TypedDataField!]!
  }

  # The create follow eip 712 typed data value
  type CreateFollowEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    followerProfileId: ProfileId!
    idsOfProfilesToFollow: [ProfileId!]!
    followTokenIds: [TokenId!]!
    datas: [BlockchainData!]!
  }

  input FollowRequest {
    follow: [Follow!]!
  }

  input Follow {
    profileId: ProfileId!
    followModule: FollowModuleRedeemInput
  }

  input FollowModuleRedeemInput {
    feeFollowModule: FeeFollowModuleRedeemInput
    unknownFollowModule: UnknownFollowModuleRedeemInput
  }

  input FeeFollowModuleRedeemInput {
    amount: AmountInput!
  }

  type CreateUnfollowBroadcastItemResult {
    # This broadcast item ID
    id: BroadcastId!

    # The date the broadcast item expiries
    expiresAt: DateTime!

    # The typed data
    typedData: CreateUnfollowEIP712TypedData!
  }

  type CreateUnfollowEIP712TypedData {
    # The types
    types: CreateUnfollowEIP712TypedDataTypes!

    # The typed data domain
    domain: EIP712TypedDataDomain!

    # The values
    value: CreateUnfollowEIP712TypedDataValue!
  }

  type CreateUnfollowEIP712TypedDataTypes {
    Unfollow: [EIP712TypedDataField!]!
  }

  type CreateUnfollowEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    unfollowerProfileId: ProfileId!
    idsOfProfilesToUnfollow: [ProfileId!]!
  }

  input InternalClaimRequest {
    secret: String!
    address: EvmAddress!
    handle: CreateHandle
    freeTextHandle: Boolean
    overrideTradeMark: Boolean!
    overrideAlreadyClaimed: Boolean!
  }

  # Create handle value
  scalar CreateHandle

  input InternalCuratedUpdateRequest {
    secret: String!

    # The full handle - namespace/localname
    handle: Handle!
    remove: Boolean!
  }

  input InternalAllowDomainRequest {
    secret: String!
    domain: URI!
  }

  input InternalAddCuratedTagRequest {
    secret: String!
    hhh: String!
    ttt: String!
  }

  input InternalRemoveCuratedTagRequest {
    secret: String!
    hhh: String!
    ttt: String!
  }

  input InternalUpdateProfileStatusRequest {
    secret: String!
    hhh: String!
    ss: Boolean!
    dd: Boolean!
  }

  input InternalNftIndexRequest {
    secret: String!
    n: [Nfi!]!
  }

  input Nfi {
    c: EvmAddress!
    i: ChainId!
  }

  input InternalNftVerifyRequest {
    secret: String!
    n: [Nfi!]!
  }

  input InternalAddInvitesRequest {
    secret: String!
    p: ProfileId!
    n: Int!
  }

  input SetFollowModuleRequest {
    followModule: FollowModuleInput!
  }

  input FollowModuleInput {
    feeFollowModule: FeeFollowModuleInput
    revertFollowModule: Boolean
    freeFollowModule: Boolean
    unknownFollowModule: UnknownFollowModuleInput
  }

  input FeeFollowModuleInput {
    amount: AmountInput!
    recipient: EvmAddress!
  }

  input UnknownFollowModuleInput {
    address: EvmAddress!
    data: BlockchainData!
  }

  input ActOnOpenActionLensManagerRequest {
    for: PublicationId!
    actOn: ActOnOpenActionLensManagerInput!
    referrers: [OnchainReferrer!] = []
  }

  # The lens manager will only support FREE open action modules, if you want your unknown module allowed to be signless please contact us
  input ActOnOpenActionLensManagerInput {
    simpleCollectOpenAction: Boolean
    unknownOpenAction: UnknownOpenActionActRedeemInput
  }

  input UnknownOpenActionActRedeemInput {
    address: EvmAddress!
    data: BlockchainData!
  }

  input OnchainReferrer {
    publicationId: PublicationId
    profileId: ProfileId
  }

  input LegacyCollectRequest {
    on: PublicationId!
    referrer: PublicationId
  }

  type CreateSetFollowModuleBroadcastItemResult {
    # This broadcast item ID
    id: BroadcastId!

    # The date the broadcast item expiries
    expiresAt: DateTime!

    # The typed data
    typedData: CreateSetFollowModuleEIP712TypedData!
  }

  type CreateSetFollowModuleEIP712TypedData {
    # The types
    types: CreateSetFollowModuleEIP712TypedDataTypes!

    # The typed data domain
    domain: EIP712TypedDataDomain!

    # The values
    value: CreateSetFollowModuleEIP712TypedDataValue!
  }

  type CreateSetFollowModuleEIP712TypedDataTypes {
    SetFollowModule: [EIP712TypedDataField!]!
  }

  type CreateSetFollowModuleEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    profileId: ProfileId!
    followModule: EvmAddress!
    followModuleInitData: BlockchainData!
  }

  type CreateActOnOpenActionBroadcastItemResult {
    # This broadcast item ID
    id: BroadcastId!

    # The date the broadcast item expiries
    expiresAt: DateTime!

    # The typed data
    typedData: CreateActOnOpenActionEIP712TypedData!
  }

  type CreateActOnOpenActionEIP712TypedData {
    # The types
    types: CreateActOnOpenActionEIP712TypedDataTypes!

    # The typed data domain
    domain: EIP712TypedDataDomain!

    # The values
    value: CreateActOnOpenActionEIP712TypedDataValue!
  }

  type CreateActOnOpenActionEIP712TypedDataTypes {
    Act: [EIP712TypedDataField!]!
  }

  type CreateActOnOpenActionEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    publicationActedProfileId: ProfileId!
    publicationActedId: OnchainPublicationId!
    actorProfileId: ProfileId!
    referrerProfileIds: [ProfileId!]!
    referrerPubIds: [OnchainPublicationId!]!
    actionModuleAddress: EvmAddress!
    actionModuleData: BlockchainData!
  }

  # The onchain publication id
  scalar OnchainPublicationId

  input ActOnOpenActionRequest {
    for: PublicationId!
    actOn: ActOnOpenActionInput!
    referrers: [OnchainReferrer!] = []
  }

  input ActOnOpenActionInput {
    multirecipientCollectOpenAction: Boolean
    simpleCollectOpenAction: Boolean
    unknownOpenAction: UnknownOpenActionActRedeemInput
  }

  type CreateLegacyCollectBroadcastItemResult {
    # This broadcast item ID
    id: BroadcastId!

    # The date the broadcast item expiries
    expiresAt: DateTime!

    # The typed data
    typedData: CreateLegacyCollectEIP712TypedData!
  }

  type CreateLegacyCollectEIP712TypedData {
    # The types
    types: CreateLegacyCollectEIP712TypedDataTypes!

    # The typed data domain
    domain: EIP712TypedDataDomain!

    # The values
    value: CreateLegacyCollectEIP712TypedDataValue!
  }

  type CreateLegacyCollectEIP712TypedDataTypes {
    CollectLegacy: [EIP712TypedDataField!]!
  }

  type CreateLegacyCollectEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    publicationCollectedProfileId: ProfileId!
    publicationCollectedId: OnchainPublicationId!
    collectorProfileId: ProfileId!
    referrerProfileId: ProfileId!
    referrerPubId: OnchainPublicationId!
    collectModuleData: BlockchainData!
  }

  union RelayMomokaResult =
      CreateMomokaPublicationResult
    | LensProfileManagerRelayError

  input MomokaPostRequest {
    contentURI: URI!
  }

  input MomokaCommentRequest {
    commentOn: PublicationId!
    contentURI: URI!
  }

  input MomokaQuoteRequest {
    contentURI: URI!
    quoteOn: PublicationId!
  }

  input MomokaMirrorRequest {
    mirrorOn: PublicationId!

    # You can add information like app on a mirror or tracking stuff
    metadataURI: URI
  }

  type CreateMomokaQuoteBroadcastItemResult {
    # This broadcast item ID
    id: BroadcastId!

    # The date the broadcast item expiries
    expiresAt: DateTime!

    # The typed data
    typedData: CreateMomokaQuoteEIP712TypedData!
  }

  type CreateMomokaQuoteEIP712TypedData {
    # The types
    types: CreateMomokaQuoteEIP712TypedDataTypes!

    # The typed data domain
    domain: EIP712TypedDataDomain!

    # The values
    value: CreateMomokaQuoteEIP712TypedDataValue!
  }

  type CreateMomokaQuoteEIP712TypedDataTypes {
    Quote: [EIP712TypedDataField!]!
  }

  type CreateMomokaQuoteEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    profileId: ProfileId!
    contentURI: URI!
    pointedProfileId: ProfileId!
    pointedPubId: OnchainPublicationId!
    referrerProfileIds: [ProfileId!]!
    referrerPubIds: [OnchainPublicationId!]!
    referenceModuleData: BlockchainData!
    actionModules: [EvmAddress!]!
    actionModulesInitDatas: [BlockchainData!]!
    referenceModule: EvmAddress!
    referenceModuleInitData: BlockchainData!
  }

  type CreateMomokaPostBroadcastItemResult {
    # This broadcast item ID
    id: BroadcastId!

    # The date the broadcast item expiries
    expiresAt: DateTime!

    # The typed data
    typedData: CreateMomokaPostEIP712TypedData!
  }

  type CreateMomokaPostEIP712TypedData {
    # The types
    types: CreateMomokaPostEIP712TypedDataTypes!

    # The typed data domain
    domain: EIP712TypedDataDomain!

    # The values
    value: CreateMomokaPostEIP712TypedDataValue!
  }

  type CreateMomokaPostEIP712TypedDataTypes {
    Post: [EIP712TypedDataField!]!
  }

  type CreateMomokaPostEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    profileId: ProfileId!
    contentURI: URI!
    actionModules: [EvmAddress!]!
    actionModulesInitDatas: [BlockchainData!]!
    referenceModule: EvmAddress!
    referenceModuleInitData: BlockchainData!
  }

  type CreateMomokaCommentBroadcastItemResult {
    # This broadcast item ID
    id: BroadcastId!

    # The date the broadcast item expiries
    expiresAt: DateTime!

    # The typed data
    typedData: CreateMomokaCommentEIP712TypedData!
  }

  type CreateMomokaCommentEIP712TypedData {
    # The types
    types: CreateMomokaCommentEIP712TypedDataTypes!

    # The typed data domain
    domain: EIP712TypedDataDomain!

    # The values
    value: CreateMomokaCommentEIP712TypedDataValue!
  }

  type CreateMomokaCommentEIP712TypedDataTypes {
    Comment: [EIP712TypedDataField!]!
  }

  type CreateMomokaCommentEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    profileId: ProfileId!
    contentURI: URI!
    pointedProfileId: ProfileId!
    pointedPubId: OnchainPublicationId!
    referrerProfileIds: [ProfileId!]!
    referrerPubIds: [OnchainPublicationId!]!
    referenceModuleData: BlockchainData!
    actionModules: [EvmAddress!]!
    actionModulesInitDatas: [BlockchainData!]!
    referenceModule: EvmAddress!
    referenceModuleInitData: BlockchainData!
  }

  type CreateMomokaMirrorBroadcastItemResult {
    # This broadcast item ID
    id: BroadcastId!

    # The date the broadcast item expiries
    expiresAt: DateTime!

    # The typed data
    typedData: CreateMomokaMirrorEIP712TypedData!
  }

  type CreateMomokaMirrorEIP712TypedData {
    # The types
    types: CreateMomokaMirrorEIP712TypedDataTypes!

    # The typed data domain
    domain: EIP712TypedDataDomain!

    # The values
    value: CreateMomokaMirrorEIP712TypedDataValue!
  }

  type CreateMomokaMirrorEIP712TypedDataTypes {
    Mirror: [EIP712TypedDataField!]!
  }

  type CreateMomokaMirrorEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    profileId: ProfileId!
    metadataURI: String!
    pointedProfileId: ProfileId!
    pointedPubId: OnchainPublicationId!
    referrerProfileIds: [ProfileId!]!
    referrerPubIds: [OnchainPublicationId!]!
    referenceModuleData: BlockchainData!
  }

  input NftGalleryCreateRequest {
    name: NftGalleryName!
    items: [NftInput!]!
  }

  input NftInput {
    contract: NetworkAddressInput!
    tokenId: TokenId!
  }

  input NftGalleryUpdateInfoRequest {
    galleryId: NftGalleryId!
    name: NftGalleryName!
  }

  input NftGalleryUpdateItemOrderRequest {
    galleryId: NftGalleryId!
    updates: [NftUpdateItemOrder!] = []
  }

  input NftUpdateItemOrder {
    contract: NetworkAddressInput!
    tokenId: TokenId!
    newOrder: Int!
  }

  input NftGalleryUpdateItemsRequest {
    galleryId: NftGalleryId!
    toAdd: [NftInput!] = []
    toRemove: [NftInput!] = []
  }

  input NftGalleryDeleteRequest {
    galleryId: NftGalleryId!
  }

  type NftOwnershipChallengeResult {
    success: Boolean!
    info: String
  }

  input NftOwnershipChallengeRequest {
    for: EvmAddress!
    nfts: [NftInput!]!
  }

  input ProfileInterestsRequest {
    interests: [ProfileInterestTypes!]!
  }

  # Profile interests types
  enum ProfileInterestTypes {
    ART_ENTERTAINMENT
    ART_ENTERTAINMENT__BOOKS
    ART_ENTERTAINMENT__ART
    ART_ENTERTAINMENT__DESIGN
    ART_ENTERTAINMENT__PHOTOGRAPHY
    ART_ENTERTAINMENT__FASHION
    ART_ENTERTAINMENT__ANIME
    ART_ENTERTAINMENT__MEMES
    ART_ENTERTAINMENT__FILM_TV
    ART_ENTERTAINMENT__MUSIC
    BUSINESS
    BUSINESS__CREATOR_ECONOMY
    BUSINESS__FINANCE
    BUSINESS__MARKETING
    TECHNOLOGY
    TECHNOLOGY__AI_ML
    TECHNOLOGY__SCIENCE
    TECHNOLOGY__PROGRAMMING
    TECHNOLOGY__TOOLS
    TECHNOLOGY__BIOTECH
    CAREER
    EDUCATION
    FAMILY_PARENTING
    HEALTH_FITNESS
    HEALTH_FITNESS__EXERCISE
    HEALTH_FITNESS__BIOHACKING
    FOOD_DRINK
    FOOD_DRINK__RESTAURANTS
    FOOD_DRINK__COOKING
    FOOD_DRINK__COCKTAILS
    FOOD_DRINK__BEER
    FOOD_DRINK__WINE
    HOBBIES_INTERESTS
    HOBBIES_INTERESTS__ARTS_CRAFTS
    HOBBIES_INTERESTS__GAMING
    HOBBIES_INTERESTS__TRAVEL
    HOBBIES_INTERESTS__COLLECTING
    HOBBIES_INTERESTS__SPORTS
    HOBBIES_INTERESTS__CARS
    HOME_GARDEN
    HOME_GARDEN__NATURE
    HOME_GARDEN__ANIMALS
    HOME_GARDEN__HOME_IMPROVEMENT
    HOME_GARDEN__GARDENING
    LAW_GOVERNMENT_POLITICS
    LAW_GOVERNMENT_POLITICS__REGULATION
    NEWS
    LENS
    CRYPTO
    CRYPTO__NFT
    CRYPTO__DEFI
    CRYPTO__WEB3
    CRYPTO__WEB3_SOCIAL
    CRYPTO__GOVERNANCE
    CRYPTO__DAOS
    CRYPTO__GM
    CRYPTO__METAVERSE
    CRYPTO__REKT
    CRYPTO__ETHEREUM
    CRYPTO__BITCOIN
    CRYPTO__L1
    CRYPTO__L2
    CRYPTO__SCALING
    NSFW
  }

  input DismissRecommendedProfilesRequest {
    dismiss: [ProfileId!]!
  }

  input SetDefaultProfileRequest {
    profileId: ProfileId!
  }

  union ClaimProfileWithHandleResult =
      RelaySuccess
    | ClaimProfileWithHandleErrorResult

  type ClaimProfileWithHandleErrorResult {
    reason: ClaimProfileWithHandleErrorReasonType!
  }

  # Claim profile with handle error reason type
  enum ClaimProfileWithHandleErrorReasonType {
    CONTRACT_EXECUTED
    HANDLE_ALREADY_CLAIMED
    CLAIM_NOT_LINKED_TO_WALLET
    CLAIM_TIME_EXPIRED
    CLAIM_NOT_FOUND
    HANDLE_ALREADY_EXISTS
    HANDLE_RESERVED
    CAN_NOT_FREE_TEXT
  }

  input ClaimProfileWithHandleRequest {
    id: String
    freeTextHandle: CreateHandle
    followModule: FollowModuleInput
  }

  input InviteRequest {
    invites: [EvmAddress!]!
  }

  input BlockRequest {
    profiles: [ProfileId!]!
  }

  input UnblockRequest {
    profiles: [ProfileId!]!
  }

  input OnchainSetProfileMetadataRequest {
    metadataURI: URI!
  }

  type CreateOnchainSetProfileMetadataBroadcastItemResult {
    # This broadcast item ID
    id: BroadcastId!

    # The date the broadcast item expiries
    expiresAt: DateTime!

    # The typed data
    typedData: CreateOnchainSetProfileMetadataEIP712TypedData!
  }

  type CreateOnchainSetProfileMetadataEIP712TypedData {
    # The types
    types: CreateOnchainSetProfileMetadataEIP712TypedDataTypes!

    # The typed data domain
    domain: EIP712TypedDataDomain!

    # The values
    value: CreateOnchainSetProfileMetadataEIP712TypedDataValue!
  }

  type CreateOnchainSetProfileMetadataEIP712TypedDataTypes {
    SetProfileMetadataURI: [EIP712TypedDataField!]!
  }

  type CreateOnchainSetProfileMetadataEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    profileId: ProfileId!
    metadataURI: URI!
  }

  type CreateChangeProfileManagersBroadcastItemResult {
    # This broadcast item ID
    id: BroadcastId!

    # The date the broadcast item expiries
    expiresAt: DateTime!

    # The typed data
    typedData: CreateChangeProfileManagersEIP712TypedData!
  }

  type CreateChangeProfileManagersEIP712TypedData {
    # The types
    types: CreateChangeProfileManagersEIP712TypedDataTypes!

    # The typed data domain
    domain: EIP712TypedDataDomain!

    # The values
    value: CreateChangeProfileManagersEIP712TypedDataValue!
  }

  type CreateChangeProfileManagersEIP712TypedDataTypes {
    ChangeDelegatedExecutorsConfig: [EIP712TypedDataField!]!
  }

  type CreateChangeProfileManagersEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    delegatorProfileId: ProfileId!
    delegatedExecutors: [EvmAddress!]!
    approvals: [Boolean!]!
    configNumber: Int!
    switchToGivenConfig: Boolean!
  }

  input ChangeProfileManagersRequest {
    changeManagers: [ChangeProfileManager!] = []

    # if you define this true will enable it and false will disable it within the same tx as any other managers you are changing state for. Leave it blank if you do not want to change its current state
    approveSignless: Boolean
  }

  input ChangeProfileManager {
    address: EvmAddress!
    action: ChangeProfileManagerActionType!
  }

  enum ChangeProfileManagerActionType {
    REMOVE
    ADD
  }

  type CreateBlockProfilesBroadcastItemResult {
    # This broadcast item ID
    id: BroadcastId!

    # The date the broadcast item expiries
    expiresAt: DateTime!

    # The typed data
    typedData: CreateBlockProfilesEIP712TypedData!
  }

  type CreateBlockProfilesEIP712TypedData {
    # The types
    types: CreateBlockProfilesEIP712TypedDataTypes!

    # The typed data domain
    domain: EIP712TypedDataDomain!

    # The values
    value: CreateBlockProfilesEIP712TypedDataValue!
  }

  type CreateBlockProfilesEIP712TypedDataTypes {
    SetBlockStatus: [EIP712TypedDataField!]!
  }

  type CreateBlockProfilesEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    byProfileId: ProfileId!
    idsOfProfilesToSetBlockStatus: [ProfileId!]!
    blockStatus: [Boolean!]!
  }

  type CreateUnblockProfilesBroadcastItemResult {
    # This broadcast item ID
    id: BroadcastId!

    # The date the broadcast item expiries
    expiresAt: DateTime!

    # The typed data
    typedData: CreateUnblockProfilesEIP712TypedData!
  }

  type CreateUnblockProfilesEIP712TypedData {
    # The types
    types: CreateUnblockProfilesEIP712TypedDataTypes!

    # The typed data domain
    domain: EIP712TypedDataDomain!

    # The values
    value: CreateUnblockProfilesEIP712TypedDataValue!
  }

  type CreateUnblockProfilesEIP712TypedDataTypes {
    SetBlockStatus: [EIP712TypedDataField!]!
  }

  type CreateUnblockProfilesEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    byProfileId: ProfileId!
    idsOfProfilesToSetBlockStatus: [ProfileId!]!
    blockStatus: [Boolean!]!
  }

  input HidePublicationRequest {
    for: PublicationId!
  }

  input PublicationNotInterestedRequest {
    on: PublicationId!
  }

  input PublicationBookmarkRequest {
    on: PublicationId!
  }

  input ReactionRequest {
    reaction: PublicationReactionType!
    for: PublicationId!
  }

  input ReportPublicationRequest {
    for: PublicationId!
    reason: ReportingReasonInput!
    additionalComments: String
  }

  input ReportingReasonInput {
    sensitiveReason: SensitiveReasonInput
    illegalReason: IllegalReasonInput
    fraudReason: FraudReasonInput
    spamReason: SpamReasonInput
  }

  input SensitiveReasonInput {
    reason: PublicationReportingReason!
    subreason: PublicationReportingSensitiveSubreason!
  }

  enum PublicationReportingReason {
    SENSITIVE
    ILLEGAL
    FRAUD
    SPAM
  }

  enum PublicationReportingSensitiveSubreason {
    NSFW
    OFFENSIVE
  }

  input IllegalReasonInput {
    reason: PublicationReportingReason!
    subreason: PublicationReportingIllegalSubreason!
  }

  enum PublicationReportingIllegalSubreason {
    ANIMAL_ABUSE
    HUMAN_ABUSE
    VIOLENCE
    THREAT_INDIVIDUAL
    DIRECT_THREAT
  }

  input FraudReasonInput {
    reason: PublicationReportingReason!
    subreason: PublicationReportingFraudSubreason!
  }

  enum PublicationReportingFraudSubreason {
    SCAM
    IMPERSONATION
  }

  input SpamReasonInput {
    reason: PublicationReportingReason!
    subreason: PublicationReportingSpamSubreason!
  }

  enum PublicationReportingSpamSubreason {
    MISLEADING
    MISUSE_HASHTAGS
    UNRELATED
    REPETITIVE
    FAKE_ENGAGEMENT
    MANIPULATION_ALGO
    LOW_SIGNAL
    SOMETHING_ELSE
  }

  input OnchainPostRequest {
    contentURI: URI!
    openActionModules: [OpenActionModuleInput!] = []
    referenceModule: ReferenceModuleInput
  }

  input OpenActionModuleInput {
    collectOpenAction: CollectActionModuleInput
    unknownOpenAction: UnknownOpenActionModuleInput
  }

  input CollectActionModuleInput {
    multirecipientCollectOpenAction: MultirecipientFeeCollectModuleInput
    simpleCollectOpenAction: SimpleCollectOpenActionModuleInput
  }

  input MultirecipientFeeCollectModuleInput {
    amount: AmountInput!
    collectLimit: String
    referralFee: Float = 0
    followerOnly: Boolean!
    endsAt: DateTime
    recipients: [RecipientDataInput!]!
  }

  input RecipientDataInput {
    # Recipient of collect fees.
    recipient: EvmAddress!

    # Split %, should be between 0.01 and 100. Up to 2 decimal points supported. All % should add up to 100
    split: Float!
  }

  input SimpleCollectOpenActionModuleInput {
    amount: AmountInput
    referralFee: Float = 0
    recipient: EvmAddress
    collectLimit: String
    followerOnly: Boolean!
    endsAt: DateTime
  }

  input UnknownOpenActionModuleInput {
    address: EvmAddress!
    data: BlockchainData!
  }

  input ReferenceModuleInput {
    followerOnlyReferenceModule: Boolean
    degreesOfSeparationReferenceModule: DegreesOfSeparationReferenceModuleInput
    unknownReferenceModule: UnknownReferenceModuleInput
  }

  input DegreesOfSeparationReferenceModuleInput {
    commentsRestricted: Boolean!
    mirrorsRestricted: Boolean!
    quotesRestricted: Boolean!
    degreesOfSeparation: Int!

    # You can set the degree to follow someone elses graph, if you leave blank it use your profile
    sourceProfileId: ProfileId
  }

  input UnknownReferenceModuleInput {
    address: EvmAddress!
    data: BlockchainData!
  }

  input OnchainCommentRequest {
    contentURI: URI!
    commentOn: PublicationId!

    commentOnReferenceModuleData: BlockchainData
    openActionModules: [OpenActionModuleInput!] = []
    referenceModule: ReferenceModuleInput
    referrers: [OnchainReferrer!] = []
  }

  input OnchainQuoteRequest {
    quoteOn: PublicationId!

    quoteOnReferenceModuleData: BlockchainData
    contentURI: URI!
    openActionModules: [OpenActionModuleInput!] = []
    referenceModule: ReferenceModuleInput
    referrers: [OnchainReferrer!] = []
  }

  input OnchainMirrorRequest {
    mirrorOn: PublicationId!

    metadataURI: URI

    mirrorReferenceModuleData: BlockchainData
    referrers: [OnchainReferrer!] = []
  }

  type RefreshPublicationMetadataResult {
    result: RefreshPublicationMetadataResultType!
  }

  enum RefreshPublicationMetadataResultType {
    QUEUED
    ALREADY_PENDING
    VALID_PUBLICATION_NOT_FOUND
  }

  input RefreshPublicationMetadataRequest {
    for: PublicationId!
  }

  type CreateOnchainPostBroadcastItemResult {
    # This broadcast item ID
    id: BroadcastId!

    # The date the broadcast item expiries
    expiresAt: DateTime!

    # The typed data
    typedData: CreateOnchainPostEIP712TypedData!
  }

  type CreateOnchainPostEIP712TypedData {
    # The types
    types: CreateOnchainPostEIP712TypedDataTypes!

    # The typed data domain
    domain: EIP712TypedDataDomain!

    # The values
    value: CreateOnchainPostEIP712TypedDataValue!
  }

  type CreateOnchainPostEIP712TypedDataTypes {
    Post: [EIP712TypedDataField!]!
  }

  type CreateOnchainPostEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    profileId: ProfileId!
    contentURI: URI!
    actionModules: [EvmAddress!]!
    actionModulesInitDatas: [BlockchainData!]!
    referenceModule: EvmAddress!
    referenceModuleInitData: BlockchainData!
  }

  type CreateOnchainCommentBroadcastItemResult {
    # This broadcast item ID
    id: BroadcastId!

    # The date the broadcast item expiries
    expiresAt: DateTime!

    # The typed data
    typedData: CreateOnchainCommentEIP712TypedData!
  }

  type CreateOnchainCommentEIP712TypedData {
    # The types
    types: CreateOnchainCommentEIP712TypedDataTypes!

    # The typed data domain
    domain: EIP712TypedDataDomain!

    # The values
    value: CreateOnchainCommentEIP712TypedDataValue!
  }

  type CreateOnchainCommentEIP712TypedDataTypes {
    Comment: [EIP712TypedDataField!]!
  }

  type CreateOnchainCommentEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    profileId: ProfileId!
    contentURI: URI!
    pointedProfileId: ProfileId!
    pointedPubId: OnchainPublicationId!
    referrerProfileIds: [ProfileId!]!
    referrerPubIds: [OnchainPublicationId!]!
    referenceModuleData: BlockchainData!
    actionModules: [EvmAddress!]!
    actionModulesInitDatas: [BlockchainData!]!
    referenceModule: EvmAddress!
    referenceModuleInitData: BlockchainData!
  }

  type CreateOnchainQuoteBroadcastItemResult {
    # This broadcast item ID
    id: BroadcastId!

    # The date the broadcast item expiries
    expiresAt: DateTime!

    # The typed data
    typedData: CreateOnchainQuoteEIP712TypedData!
  }

  type CreateOnchainQuoteEIP712TypedData {
    # The types
    types: CreateOnchainQuoteEIP712TypedDataTypes!

    # The typed data domain
    domain: EIP712TypedDataDomain!

    # The values
    value: CreateOnchainQuoteEIP712TypedDataValue!
  }

  type CreateOnchainQuoteEIP712TypedDataTypes {
    Quote: [EIP712TypedDataField!]!
  }

  type CreateOnchainQuoteEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    profileId: ProfileId!
    contentURI: URI!
    pointedProfileId: ProfileId!
    pointedPubId: OnchainPublicationId!
    referrerProfileIds: [ProfileId!]!
    referrerPubIds: [OnchainPublicationId!]!
    referenceModuleData: BlockchainData!
    actionModules: [EvmAddress!]!
    actionModulesInitDatas: [BlockchainData!]!
    referenceModule: EvmAddress!
    referenceModuleInitData: BlockchainData!
  }

  type CreateOnchainMirrorBroadcastItemResult {
    # This broadcast item ID
    id: BroadcastId!

    # The date the broadcast item expiries
    expiresAt: DateTime!

    # The typed data
    typedData: CreateOnchainMirrorEIP712TypedData!
  }

  type CreateOnchainMirrorEIP712TypedData {
    # The types
    types: CreateOnchainMirrorEIP712TypedDataTypes!

    # The typed data domain
    domain: EIP712TypedDataDomain!

    # The values
    value: CreateOnchainMirrorEIP712TypedDataValue!
  }

  type CreateOnchainMirrorEIP712TypedDataTypes {
    Mirror: [EIP712TypedDataField!]!
  }

  type CreateOnchainMirrorEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    profileId: ProfileId!
    metadataURI: String!
    pointedProfileId: ProfileId!
    pointedPubId: OnchainPublicationId!
    referrerProfileIds: [ProfileId!]!
    referrerPubIds: [OnchainPublicationId!]!
    referenceModuleData: BlockchainData!
  }

  enum IdKitPhoneVerifyWebhookResultStatusType {
    SUCCESS
    ALREADY_VERIFIED
  }

  input IdKitPhoneVerifyWebhookRequest {
    sharedSecret: String!
    worldcoin: WorldcoinPhoneVerifyWebhookRequest
  }

  input WorldcoinPhoneVerifyWebhookRequest {
    nullifierHash: String!
    signalType: WorldcoinPhoneVerifyType!
    signal: EvmAddress!
  }

  enum WorldcoinPhoneVerifyType {
    PHONE
    ORB
  }

  type Subscription {
    authorizationRecordRevoked(authorizationId: UUID!): Void
    newMomokaTransaction: MomokaTransaction!
    newNotification(for: ProfileId!): Notification
    userSigNonces(address: EvmAddress!): UserSigNonces!
    newPublicationStats(for: PublicationId!): PublicationStats!
  }
`


export {typeDefs}
