const resolvers = {
  Query: {
    challenge: (_, { request }) => {
      return {
        id: "signedBy",
        text: `Challenge Re`,
      };
    },
    verify: (_, { request }) => {
      return true;
    },
    approvedAuthentications: (_, { request }) => {
      if (!request) {
        throw new Error("Missing request object");
      }
      const dummyAuthentications = [
        {
          authorizationId: "123",
          browser: "Chrome",
          device: "Desktop",
          os: "Windows",
          origin: "https://example.com",
          expiresAt: new Date().toISOString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ];

      const { limit, cursor } = request;

      const paginatedAuthentications = dummyAuthentications;

      return {
        items: paginatedAuthentications,
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    currentSession: () => {
      const dummyCurrentSession = {
        authorizationId: "456",
        browser: "Firefox",
        device: "Laptop",
        os: "MacOS",
        origin: "https://example.com",
        expiresAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      return dummyCurrentSession;
    },
    ownedHandles: (_, { request }) => {
      // Destructure the request parameter
      const { limit, cursor, for: ownerAddress } = request;

      // Dummy data for testing
      const dummyHandles = [
        {
          id: "1",
          fullHandle: "dummyNamespace/dummyLocalname",
          namespace: "dummyNamespace",
          localName: "dummyLocalname",
          suggestedFormatted: {
            full: "dummyNamespace/@dummyLocalname",
            localName: "@dummyLocalname",
          },
          linkedTo: null,
          ownedBy: ownerAddress,
        },
        // Add more dummy handles as needed
      ];

      // For simplicity, return all dummy handles without pagination
      return {
        items: dummyHandles,
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    currencies: (_, { request }) => {
      // Destructure the request parameter
      const { limit, cursor } = request;

      // Dummy data for testing
      const dummyCurrencies = [
        {
          name: "Dummy Token 1",
          symbol: "DT1",
          decimals: 18,
          contract: {
            address: "0x1234567890abcdef1234567890abcdef12345678",
            chainId: 1,
          },
        },
        {
          name: "Dummy Token 2",
          symbol: "DT2",
          decimals: 8,
          contract: {
            address: "0xabcdef1234567890abcdef1234567890abcdef12",
            chainId: 1,
          },
        },
        // Add more dummy currencies as needed
      ];

      // For simplicity, return all dummy currencies without pagination
      return {
        items: dummyCurrencies,
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    feed: (_, { request }) => {
      // Destructure the request parameter
      const { cursor, where } = request;

      // Dummy data for testing
      const dummyFeedItems = [
        {
          id: "1",
          root: {
            __typename: "Post", // Replace with the appropriate typename based on your data
            // Include fields specific to the Post type
          },
          mirrors: [
            {
              id: "mirror1",
              publishedOn: {
                // Include fields specific to the App type
              },
              isHidden: false,
              momoka: {
                // Include fields specific to the MomokaInfo type
              },
              txHash: "0xabcdef1234567890abcdef1234567890abcdef12",
              createdAt: new Date().toISOString(),
              mirrorOn: {
                __typename: "Post", // Replace with the appropriate typename based on your data
                // Include fields specific to the MirrorablePublication type
              },
              by: {
                // Include fields specific to the Profile type
              },
            },
            // Add more dummy mirrors as needed
          ],
          acted: [
            {
              // Include fields specific to the OpenActionProfileActed type
            },
            // Add more dummy acted items as needed
          ],
          reactions: [
            {
              // Include fields specific to the ReactionEvent type
            },
            // Add more dummy reactions as needed
          ],
          comments: [
            {
              // Include fields specific to the Comment type
            },
            // Add more dummy comments as needed
          ],
        },
        // Add more dummy feed items as needed
      ];

      // For simplicity, return all dummy feed items without pagination
      return {
        items: dummyFeedItems,
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    internalClaimStatus: (_, { request }) => {
      // Destructure the request parameter
      const { secret, address } = request;

      // Dummy logic for internal claim status
      // This is where you would implement the actual claim status logic
      // For now, let's just log the received data
      console.log(
        `Received claim status request for address ${address} with secret ${secret}`
      );

      // For simplicity, return null since it's a mutation with no expected return value
      return null;
    },
    internalCuratedHandles: (_, { request }) => {
      // Destructure the request parameter
      const { secret } = request;

      // Dummy logic for internal curated handles
      // Replace this with actual implementation based on the secret
      const curatedHandles = ["handle1", "handle2", "handle3"];

      return curatedHandles;
    },

    internalAllowedDomains: (_, { request }) => {
      // Destructure the request parameter
      const { secret } = request;

      // Dummy logic for internal allowed domains
      // Replace this with actual implementation based on the secret
      const allowedDomains = ["https://example.com", "https://example.org"];

      return allowedDomains;
    },

    internalCuratedTags: (_, { request }) => {
      // Destructure the request parameter
      const { secret, hhh } = request;

      // Dummy logic for internal curated tags
      // Replace this with actual implementation based on the secret and hhh
      const curatedTags = ["tag1", "tag2", "tag3"];

      return curatedTags;
    },

    internalProfileStatus: (_, { request }) => {
      // Destructure the request parameter
      const { secret } = request;

      // Dummy logic for internal profile status
      // Replace this with actual implementation based on the secret
      const profileStatusResult = {
        ss: true,
        dd: false,
      };

      return profileStatusResult;
    },
    internalInvites: (_, { request }) => {
      // Destructure the request parameter
      const { secret, p } = request;

      // Dummy logic for internal invites
      // Replace this with the actual implementation based on the secret and profile ID
      const numberOfInvites = 5; // Replace with the actual number of invites

      return numberOfInvites;
    },
    nftCollections: (_, { request }) => {
      // Destructure the request parameter
      const {
        limit,
        cursor,
        forAddress,
        for: profileId,
        chainIds,
        excludeFollowers,
      } = request;

      // Dummy logic for nftCollections
      // Replace this with actual implementation based on the provided filters
      const dummyNftCollections = [
        {
          contract: {
            address: "0x1234567890abcdef1234567890abcdef12345678",
            chainId: 1,
          },
          name: "Dummy Collection 1",
          symbol: "DC1",
          baseUri: "https://example.com/metadata/",
          contractType: "ERC721",
          verified: true,
        },
        {
          contract: {
            address: "0xabcdef1234567890abcdef1234567890abcdef12",
            chainId: 137,
          },
          name: "Dummy Collection 2",
          symbol: "DC2",
          baseUri: "https://example.com/metadata/",
          contractType: "ERC1155",
          verified: false,
        },
        // Add more dummy collections as needed
      ];

      // For simplicity, return all dummy collections without pagination
      return {
        items: dummyNftCollections,
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },

    mutualNftCollections: (_, { request }) => {
      // Destructure the request parameter
      const { limit, cursor, observer, viewing } = request;

      // Dummy logic for mutualNftCollections
      // Replace this with actual implementation based on the provided parameters
      const dummyMutualNftCollections = [
        {
          contract: {
            address: "0x1234567890abcdef1234567890abcdef12345678",
            chainId: 1,
          },
          name: "Mutual Collection 1",
          symbol: "MC1",
          baseUri: "https://example.com/metadata/",
          contractType: "ERC721",
          verified: true,
        },
        {
          contract: {
            address: "0xabcdef1234567890abcdef1234567890abcdef12",
            chainId: 137,
          },
          name: "Mutual Collection 2",
          symbol: "MC2",
          baseUri: "https://example.com/metadata/",
          contractType: "ERC1155",
          verified: false,
        },
        // Add more dummy mutual collections as needed
      ];

      // For simplicity, return all dummy mutual collections without pagination
      return {
        items: dummyMutualNftCollections,
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },

    nftCollectionOwners: (_, { request }) => {
      // Destructure the request parameter
      const {
        limit,
        cursor,
        for: contractAddress,
        chainId,
        order,
        by,
      } = request;

      // Dummy logic for nftCollectionOwners
      // Replace this with actual implementation based on the provided parameters
      const dummyNftCollectionOwners = [
        {
          id: "profile1",
          ownedBy: {
            address: "0xabcdef1234567890abcdef1234567890abcdef12",
            chainId: 1,
          },
        },
        {
          id: "profile2",
          ownedBy: {
            address: "0x1234567890abcdef1234567890abcdef12345678",
            chainId: 137,
          },
        },
        // Add more dummy owners as needed
      ];

      // For simplicity, return all dummy owners without pagination
      return {
        items: dummyNftCollectionOwners,
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },

    // --------------------------------------------------------
    feedHighlights: (_, { request }) => {
      return {
        items: [
          {
            FeedHighlight: [ "Post" | "Quote" ],
          }
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    followers: (_, { request }) => {
      return {
        items: [
          {
            Profile: {
              id: "profile1",
              ownedBy: "0x123",
              txHash: "0x7234689", // Gotta Check Once
            },
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    mutualFollowers: (_, { request }) => {
      return {
        items: [
          {
            Profile: {
              id: "profile1",
              ownedBy: "0x123",
              txHash: "0x7234689", // Gotta Check Once
            },
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    following: (_, { request }) => {
      return {
        items: [
          {
            Profile: {
              id: "profile1",
              ownedBy: "0x123",
              txHash: "0x7234689", // Gotta Check Once
            },
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    followStatusBulk: (_, { request }) => {
      return {
        follower: "0x123",
        profileId: "profile1",
        status: {
          value: true,
          isFinalisedOnchain: true,
        },
      };
    },
    ping: () => {
      return "pong";
    },
    approvedModuleAllowanceAmount: (_, { request }) => {
      return {
        moduleName: "moduleName1",
        moduleContract: {
          address: "0x123",
          chainId: 1,
        },
        allowance: "1000000000000000000",
      };
    },
    generateModuleCurrencyApprovalData: (_, { request }) => {
      return {
        to: "0x123",
        from: "0x456",
        data: "0x789",
      };
    },
    supportedOpenActionModules: (_, { request }) => {
      return {
        items: [
          {
            SupportedModule: [
              "KnownSupportedModule" | "UnknownSupportedModule",
            ],
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    supportedReferenceModules: (_, { request }) => {
      return {
        items: [
          {
            SupportedModule: [
              "KnownSupportedModule" | "UnknownSupportedModule",
            ],
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    supportedOpenActionCollectModules: (_, { request }) => {
      return {
        items: [
          {
            SupportedModule: [
              "KnownSupportedModule" | "UnknownSupportedModule",
            ],
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    supportedFollowModules: (_, { request }) => {
      return {
        items: [
          {
            SupportedModule: [
              "KnownSupportedModule" | "UnknownSupportedModule",
            ],
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    momokaSubmitters: (_, { request }) => {
      return {
        items: [
          {
            address: "0x123",
            name: "name1",
            totalTransactions: 10000000,
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    momokaSummary: (_, { request }) => {
      return {
        totalTransactions: 10000000,
      };
    },
    momokaTransactions: (_, { request }) => {
      return {
        items: [
          {
            MomokaTransaction: [
              "MomokaPostTransaction" |
                "MomokaCommentTransaction" |
                "MomokaMirrorTransaction" |
                "MomokaQuoteTransaction",
            ],
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    momokaTransaction: (_, { request }) => {
      return {
        MomokaTransaction: [
          "MomokaPostTransaction" |
            "MomokaCommentTransaction" |
            "MomokaMirrorTransaction" |
            "MomokaQuoteTransaction",
        ],
      };
    },
    nfts: (_, { request }) => {
      return {
        items: [
          {
            Nft: {
              tokenId: "tokenId1",
              contentURI: "https://example.com",
              contract: {
                address: "0x123",
                chainId: 1,
              },
              contractType: "ERC721",
              totalSupply: "1",
              collection: {
                contract: {
                  address: "0x123",
                  chainId: 1,
                },
                name: "Dummy Collection 1",
                symbol: "DC1",
                baseUri: "https://example.com/metadata/",
                contractType: "ERC721",
                verified: true,
              },
              metadata: {
                description: "Description 1",
                external_url: "https://example.com",
                name: "Name 1",
                attributes: [
                  {
                    displayType: "NUMBER",
                    traitType: "traitType1",
                    value: "value1",
                  },
                ],
                image: {
                  raw: {
                    mimeType: "image/png",
                    width: 100,
                    height: 100,
                    URI: "https://example.com/image.png",
                  },
                  optimized: {
                    mimeType: "image/png",
                    width: 100,
                    height: 100,
                    URI: "https://example.com/image.png",
                  },
                  transformed: (_, request) => {
                    return {
                      mimeType: "image/png",
                      width: 100,
                      height: 100,
                      URI: "https://example.com/image.png",
                    };
                  },
                },
                animationUrl: "https://example.com/animation.glb",
              },
              owner: {
                amount: "1",
                address: "0x123",
              },
            },
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    nftCollections: (_, { request }) => {
      return {
        items: [
          {
            contract: {
              address: "0x123",
              chainId: 1,
            },
            name: "Dummy Collection 1",
            symbol: "DC1",
            baseUri: "https://example.com/metadata/",
            contractType: "ERC721",
            verified: true,
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    mutualNftCollections: (_, request) => {
      return {
        items: [
          {
            contract: {
              address: "0x123",
              chainId: 1,
            },
            name: "Dummy Collection 1",
            symbol: "DC1",
            baseUri: "https://example.com/metadata/",
            contractType: "ERC721",
            verified: true,
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    nftCollectionOwners: (_, { request }) => {
      return {
        items: [
          {
            Profile: {
              id: "profile1",
              ownedBy: "0x123",
              txHash: "0x7234689", // Gotta Check Once
            },
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    popularNftCollections: (_, { request }) => {
      return {
        items: [
          {
            collection: {
              contract: {
                address: "0x123",
                chainId: 1,
              },
              name: "Dummy Collection 1",
              symbol: "DC1",
              baseUri: "https://example.com/metadata/",
              contractType: "ERC721",
              verified: true,
            },
            totalOwners: 5.0,
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    nftGalleries: (_, { request }) => {
      return {
        items: [
          {
            NftGallery: {
              id: "nftGallery1",
              name: "NFT Gallery 1",
              owner: "0x123",
              items: [
                {
                  Nft: {
                    tokenId: "tokenId1",
                    contentURI: "https://example.com",
                    contract: {
                      address: "0x123",
                      chainId: 1,
                    },
                    contractType: "ERC721",
                    totalSupply: "1",
                    collection: {
                      contract: {
                        address: "0x123",
                        chainId: 1,
                      },
                      name: "Dummy Collection 1",
                      symbol: "DC1",
                      baseUri: "https://example.com/metadata/",
                      contractType: "ERC721",
                      verified: true,
                    },
                    metadata: {
                      description: "Description 1",
                      external_url: "https://example.com",
                      name: "Name 1",
                      attributes: [
                        {
                          displayType: "NUMBER",
                          traitType: "traitType1",
                          value: "value1",
                        },
                      ],
                      image: {
                        raw: {
                          mimeType: "image/png",
                          width: 100,
                          height: 100,
                          URI: "https://example.com/image.png",
                        },
                        optimized: {
                          mimeType: "image/png",
                          width: 100,
                          height: 100,
                          URI: "https://example.com/image.png",
                        },
                        transformed: (_, request) => {
                          return {
                            mimeType: "image/png",
                            width: 100,
                            height: 100,
                            URI: "https://example.com/image.png",
                          };
                        },
                      },
                      animationUrl: "https://example.com/animation.glb",
                    },
                    owner: {
                      amount: "1",
                      address: "0x123",
                    },
                  },
                },
              ],
              createdAt: "2021-09-09T09:09:09.000Z",
              updatedAt: "2021-09-09T09:09:09.000Z",
            },
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    notifications: (_, { request }) => {
      return {
        items: [
          ReactionNotification |
            CommentNotification |
            MirrorNotification |
            QuoteNotification |
            ActedNotification |
            FollowNotification |
            MentionNotification,
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    poaps: (_, { request }) => {
      return {
        items: [
          {
            PoapEvent: {
              id: "poapEvent1",
              fancyId: "fancyId1",
              name: "POAP Event 1",
              eventUrl: "https://example.com",
              imageUrl: "https://example.com/image.png",
              country: "Singapore",
              city: "Singapore",
              description: "Description 1",
              year: 2021,
              startDate: "2021-09-09T09:09:09.000Z",
              endDate: "2021-09-09T09:09:09.000Z",
              expiryDate: "2021-09-09T09:09:09.000Z",
              virtualEvent: false,
              fromAdmin: false,
              animationURL: "https://example.com/animation.glb",
              eventTemplateId: 3764,
              privateEvent: false,
            },
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    mutualPoaps: (_, { request }) => {
      return {
        items: [
          {
            PoapEvent: {
              id: "poapEvent1",
              fancyId: "fancyId1",
              name: "POAP Event 1",
              eventUrl: "https://example.com",
              imageUrl: "https://example.com/image.png",
              country: "Singapore",
              city: "Singapore",
              description: "Description 1",
              year: 2021,
              startDate: "2021-09-09T09:09:09.000Z",
              endDate: "2021-09-09T09:09:09.000Z",
              expiryDate: "2021-09-09T09:09:09.000Z",
              virtualEvent: false,
              fromAdmin: false,
              animationURL: "https://example.com/animation.glb",
              eventTemplateId: 3764,
              privateEvent: false,
            },
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    poapHolders: (_, { request }) => {
      return {
        items: [
          {
            Profile: {
              id: "profile1",
              ownedBy: "0x123",
              txHash: "0x7234689", // Gotta Check Once
            },
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    poapEvent: (_, { request }) => {
      return {
        id: "poapEvent1",
        fancyId: "fancyId1",
        name: "POAP Event 1",
        eventUrl: "https://example.com",
        imageUrl: "https://example.com/image.png",
        country: "Singapore",
        city: "Singapore",
        description: "Description 1",
        year: 2021,
        startDate: "2021-09-09T09:09:09.000Z",
        endDate: "2021-09-09T09:09:09.000Z",
        expiryDate: "2021-09-09T09:09:09.000Z",
        virtualEvent: false,
        fromAdmin: false,
        animationURL: "https://example.com/animation.glb",
        eventTemplateId: 3764,
        privateEvent: false,
      };
    },
    profiles: (_, { request }) => {
      return {
        items: [
          {
            Profile: {
              id: "profile1",
              ownedBy: "0x123",
              txHash: "0x7234689", // Gotta Check Once
            },
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    profile: (_, { request }) => {
      return {
        id: "profile1",
        ownedBy: "0x123",
        txHash: "0x7234689", // Gotta Check Once
      };
    },
    whoActedOnPublication: (_, { request }) => {
      return {
        items: [
          {
            Profile: {
              id: "profile1",
              ownedBy: "0x123",
              txHash: "0x7234689", // Gotta Check Once
            },
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    profileInterestsOptions: () => {
      return "INTERESTS";
    },
    whoHaveBlocked: (_, { request }) => {
      return {
        items: [
          {
            Profile: {
              id: "profile1",
              ownedBy: "0x123",
              txHash: "0x7234689", // Gotta Check Once
            },
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    profileActionHistory: (_, { request }) => {
      return {
        items: [
          {
            ProfileActionHistory: {
              id: "profile1",
              actionType: "FOLLOW",
              who: "0x123",
              txHash: "0x7234689",
              actionedOn: "2021-09-09T09:09:09.000Z",
            },
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },

    lastLoggedInProfile: (_, { request }) => {
      return {
        id: "profile1",
        ownedBy: "0x123",
        txHash: "0x7234689", // Gotta Check Once
      };
    },
    defaultProfile: (_, { request }) => {
      return {
        id: "profile1",
        ownedBy: "0x123",
        txHash: "0x7234689", // Gotta Check Once
      };
    },
    claimableProfiles: () => {
      return {
        reserved: {
          id: "profile1",
          withHandle: "handle1",
          source: "RESERVED",
          expiry: "2021-09-09T09:09:09.000Z",
        },
        canMintProfilesWithFreeTextHandle: true,
      };
    },
    claimableStatus: () => {
      return "ALREADY_CLAIMED";
    },
    canClaim: (_, { request }) => {
      return {
        address: "0x123",
        canClaim: true,
      };
    },
    exploreProfiles: (_, { request }) => {
      return {
        items: [
          {
            Profile: {
              id: "profile1",
              ownedBy: "0x123",
              txHash: "0x7234689", // Gotta Check Once
            },
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    invitedProfiles: () => {
      return {
        by: "0x123",
        profileMinted: {
          id: "profile1",
          ownedBy: "0x123",
          txHash: "0x7234689",
        },
        when: "2021-09-09T09:09:09.000Z",
      };
    },
    profileAlreadyInvited: (_, { request }) => {
      return true;
    },
    profileManagers: (_, { request }) => {
      return {
        items: [
          {
            address: "0x123",
            isLensManager: true,
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },

    profilesManaged: (_, { request }) => {
      return {
        items: [
          {
            Profile: {
              id: "profile1",
              ownedBy: "0x123",
              txHash: "0x7234689", // Gotta Check Once
            },
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    profileRecommendations: (_, { request }) => {
      return {
        items: [
          {
            Profile: {
              id: "profile1",
              ownedBy: "0x123",
              txHash: "0x7234689", // Gotta Check Once
            },
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },

    followRevenues: (_, { request }) => {
      return {
        revenues: 10000000,
      };
    },
    searchProfiles: (_, request) => {
      return {
        items: [
          {
            Profile: {
              id: "profile1",
              ownedBy: "0x123",
              txHash: "0x7234689", // Gotta Check Once
            },
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    userSigNonces: () => {
      return {
        lensHubOnchainSigNonce: "0x123",
        lensTokenHandleRegistryOnchainSigNonce: "0x456",
        lensPublicActProxyOnchainSigNonce: "0x789",
      };
    },
    lensProtocolVersion: () => {
      return "V2";
    },
    publications: (_, { request }) => {
      return {
        items: ["Post" | "Comment" | "Mirror" | "Quote"],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    publication: (_, { request }) => {
      return {
        AnyPublication: ["Post" | "Comment" | "Mirror" | "Quote"],
      };
    },
    publicationsTags: (_, { request }) => {
      return {
        items: [
          {
            tag: "tag1",
            total: 1,
          },
          {
            tag: "tag2",
            total: 2,
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    publicationBookmarks: (_, { request }) => {
      return {
        items: ["Post" | "Comment" | "Mirror" | "Quote"],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    whoReactedPublication: (_, { request }) => {
      return {
        items: [
          {
            profilP: {
              id: "profile1",
              ownedBy: "0x123",
              txHash: "0x7234689", // Gotta Check Once
            },
            reactions: [
              { reaction: "UPVOTE", DateTime: "2021-09-09T09:09:09.000Z" },
            ],
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    explorePublications: (_, { request }) => {
      return {
        items: [ExplorePublication],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    validatePublicationMetadata: (_, { request }) => {
      return {
        valid: true,
        reason: "Some reason",
      };
    },
    revenueFromPublications: (_, { request }) => {
      return {
        items: [
          {
            PublicationRevenue: {
              publication,
              revenue: 10000000,
            },
          },
        ],
        pageInfo: {
          prev: null,
          next: null,
        },
      };
    },
    revenueFromPublications: (_, { request }) => {
      return {
        PublicationRevenue: {
          publication,
          revenue: 10000000,
        },
      };
    },
    searchPublications: (_, { request }) => {
      return {
        items: [PrimaryPublication],
        PaginatedResultInfo: {
          prev: null,
          next: null,
        },
      };
    },
    relayQueues: (_, { request }) => {
      return {
        items: [
          {
            key: "LENS_MANAGER_1",
            NetworkAddress: {
              address: "0x123",
              chainId: 1,
            },
            Int: 565,
          },
          {
            key: "LENS_MANAGER_2",
            NetworkAddress: {
              address: "0x456",
              chainId: 1,
            },
            Int: 565,
          },
        ],
      };
    },
    lensAPIOwnedEOAs: (_, { request }) => {
      return {
        ownedEOAs: [
          {
            address: "0x123",
            balance: "1000000000000000000",
            nonce: 0,
          },
          {
            address: "0x456",
            balance: "2000000000000000000",
            nonce: 0,
          },
        ],
      };
    },
    txIdtoTxHash: (_, { request }) => {
      return {
        txHash: "0x123",
      };
    },
    lensTransactionStatus: (_, { request }) => {
      return {
        status: "PENDING",
        txHash: "0x123",
        reason: "REVERTED",
        extraInfo: "Some extra info",
      };
    },
  },
};

module.exports = resolvers;
