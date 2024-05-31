import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import {color} from 'react-native-reanimated';

import {COLORS, FONTS, SIZES, icons, images} from '../constants';
import { image1, image2, image3, image5, image6, image7, image8, image9 ,image10} from '../fileBase64';

const LineDivider = () => {
  return (
    <View style={{width: 1, paddingVertical: 18}}>
      <View
        style={{
          flex: 1,
          borderLeftColor: COLORS.lightGray,
          borderLeftWidth: 1,
        }}></View>
    </View>
  );
};

const Home = ({navigation}) => {



  const profileData = {
    name: 'Ps007',
    point: 200,
  };
  const bookEagleElite = {
    id: 1,
    bookName: 'Elude',
    bookCover:images.elude1,
    rating: 4.5,
    language: 'Eng',
    pageNo: 341,
    author: 'Rachel Van Dyken',
    genre: ['Romance', 'Adventure', 'Drama'],
    readed: '12k',
    description:
      "This book is the sixth book in the internationally bestselling Eagle Elite Series. It's an interconnected stand alone novel with no cliffhanger! \n It's Like As Follows \n`Twenty-Four hours before we were to be married--I offered to shoot her Ten hours before our wedding--I made a mockery of her dying wish Five hours before we were going to say our vows--I promised I'd never love her One hour before I said I do--I vowed I'd never shed a tear over her death. ",
    backgroundColor: 'rgba(240,240,232,0.9)',
    navTintColor: '#000',
    url: image1,
    link:"https://www.vampires9.com/romance/Eagle_Elite_6/index_29.html"
  };

  const bookPrideAndPrejudice = {
    id: 2,
    bookName: 'Pride and Prejudice',
    bookCover: images.pride_and_prejudice,
    rating: 4.5,
    language: 'Eng',
    pageNo: 337,
    author: 'Jane Austen',
    genre: ['Classic Regency', 'Romance'],
    readed: '51k',
    description:
      " Pride and Prejudice has consistently appeared near the top of lists of 'most-loved books' among literary scholars and the reading public. It has become one of the most popular novels in English literature, Pride and Prejudice follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner. They must overcome the titular sins of pride and prejudice in order to fall in love and marry., The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.",
    backgroundColor: 'rgba(247,239,219,0.9)',
    navTintColor: '#000',
    url: image2,
    link:"https://www.gutenberg.org/files/1342/1342-h/1342-h.htm"
  };

  const bookAlotlikeadios = {
    id: 3,
    bookName: 'A Lot Like Adios',
    bookCover: images.alotlikeadios,
    rating: 4.7,
    language: 'Eng',
    pageNo: 409,
    author: 'Alexis Daria',
    genre: ['Romance', 'Fiction','Humour'],
    readed: '27k',
    description:"Alexis Daria's A Lot Like Adiós is a charming, sexy spitfire of a novel! Romance readers, this is your new favorite book || A Lot Like Adiós follows Gabe and Mich, two ex-best friends who, after Gabe left town at eighteen years old to escape his parents' crushing expectations, find themselves thrown back together again when Gabe's flourishing gym is thinking of expanding to New York.Gabriel Aguilar left the Bronx at eighteen to escape his parents' demanding expectations, but it also meant saying goodbye to Michelle, his best friend and longtime crush. Now, he's the successful co-owner of LA's hottest celebrity gym, with an investor who insists on opening a New York City location.",
    backgroundColor: 'rgba(247,239,219,0.9)',
    navTintColor: '#000',
    url: image3,
    link:"https://111-90-145-179.xyz/eBooksteach.com/Lot_Like_Adios_A_-_Alexis_Daria.pdf"
  };
  const bookTheMetropolis = {
    id: 4,
    bookName: 'The Metropolis',
    bookCover: images.theMetropolist,
    rating: 4.1,
    language: 'Eng',
    pageNo: 272,
    author: 'Seith Fried',
    genre: ['Adventure', 'Drama'],
    readed: '13k',
    description:
      "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
    backgroundColor: 'rgba(247,269,219,0.9)',
    navTintColor: '#000',
    url: image1,
    link:"https://www.goodreads.com/book/show/1043987.Metropolis"
  };
  const bookTheTempest = {
    id: 5,
    bookName: 'The Tempest',
    bookCover: images.tempest,
    rating: 4.8,
    language: 'Eng',
    pageNo: 777,
    author: 'William Shakespeare',
    genre: ['Tragic Comedy', 'Classic Shakespeare'],
    readed: '99k',
    description:"The Tempest is a play by English playwright William Shakespeare,The Tempest tells a fairly straightforward story involving an unjust act, the usurpation of Prospero's throne by his brother, and Prospero's quest to re-establish justice by restoring himself to power. Prospero uses magic to conjure a storm and torment the survivors of a shipwreck, including the King of Naples and Prospero's treacherous brother, Antonio. Prospero's slave, Caliban, plots to rid himself of his master, but is thwarted by Prospero's spirit-servant Ariel.",
    backgroundColor: 'rgba(247,239,219,0.9)',
    navTintColor: '#000',
    url: image5,
    link:"http://www.bauerverlag.eu/downloads/shakespeare-tempest.pdf"

  };
  const bookTheJuliusCaesar = {
    id: 6,
    bookName: 'Julius Caesar',
    bookCover: images.juilius,
    rating: 4.6,
    language: 'Eng',
    pageNo: 847,
    author: 'William Shakespeare',
    genre: ['History play', 'Tragedy'],
    readed: '86k',
    description:"Shakespeare's political thriller tells the story of the conspiracy against Caesar, his assassination and the defeat of his conspirators.  || The Tragedy of Julius Caesar highlights the moral crisis of Caesar’s best friend as he participates in the assassination of Caesar and deals with his grief and the subsequent civil war that eventually leads to his own death.",
    backgroundColor: 'rgba(247,239,219,0.9)',
    navTintColor: '#000',
    url: image6,
    link:"https://nosweatshakespeare.com/wp-content/uploads/2020/09/Julius-Caesar-PDF.pdf"

  };
  const bookTheRomeoandJuliet = {
    id: 7,
    bookName: 'Romeo and Juliet',
    bookCover: images.romeo,
    rating: 4.9,
    language: 'Eng',
    pageNo: 576,
    author: 'William Shakespeare',
    genre: ['Tragedy', 'Romance'],
    readed: '80k',
    description:"It is a tragic love story where the two main characters, Romeo and Juliet, are supposed to be sworn enemies but fall in love. Due to their families' ongoing conflict, they cannot be together, so they kill themselves because they cannot cope with being separated from one another.,Romeo and Juliet is a tragedy written by William Shakespeare early in his career about two young Italian star-crossed lovers whose deaths ultimately reconcile their feuding families.Romeo and Juliet belongs to a tradition of tragic romances stretching back to antiquity.",
    backgroundColor: 'rgba(247,239,219,0.9)',
    navTintColor: '#000',
    url: image7,
    link:"https://shakespeare.folger.edu/shakespeares-works/romeo-and-juliet/"
  };
  const bookTheMurderonOrientExpress= {
    id: 8,
    bookName: 'Murder on the Orient Express',
    bookCover: images.murderonorinetexpress,
    rating: 4.7,
    language: 'Eng',
    pageNo: 547,
    author: 'Agatha Christie',
    genre: ['Mystery','Crime','Thriller'],
    readed: '91k',
description:"In Murder on the Orient Express, the detective Hercule Poirot, a recurring character in the work of Agatha Christie, finds that he must travel from Istanbul to Europe and so books a ticket on the famous Orient Express,A lavish trip through Europe quickly unfolds into a race against time to solve a murder aboard a train. When an avalanche stops the Orient Express dead in its tracks, the world's greatest detective -- Hercule Poirot -- arrives to interrogate all passengers and search for clues before the killer can strike again.",
    backgroundColor: 'rgba(247,239,219,0.9)',
    navTintColor: '#000',
    url: image8,
    link:"https://archive.org/stream/MurderOnTheOrientExpress_201803/Murder_on_the_Orient_Express_djvu.txt"
  };
  const bookTheMacbeth = {
    id: 9,
    bookName: 'Macbeth',
    bookCover: images.macbeth,
    rating: 4.8,
    language: 'Eng',
    pageNo: 700,
    author: 'William Shakespeare',
    genre: ['Tragedy',"Gothic"],
    readed: '89k',
    description:"Macbeth represents a classic tragedy in that its protagonist travels down a dark path of treachery and violence that inevitably leads to his own downfall and death.Three witches tell the Scottish general Macbeth that he will be King of Scotland. Encouraged by his wife, Macbeth kills the king, becomes the new king, and kills more people out of paranoia. Civil war erupts to overthrow Macbeth, resulting in more death.the destruction wrought when ambition goes unchecked by moral constraints—finds its most powerful expression in the play's two main characters. Macbeth is a courageous Scottish general who is not naturally inclined to commit evil deeds, yet he deeply desires power and advancement.",
    backgroundColor: 'rgba(247,239,219,0.9)',
    navTintColor: '#000',
    url: image9,
    link:"https://shakespeare.folger.edu/shakespeares-works/macbeth/entire-play/"
  };


  const bookTheTinyDragon = {
    id: 10,
    bookName: 'The Tiny Dragon',
    bookCover: images.theTinyDragon,
    rating: 3.5,
    language: 'Eng',
    pageNo: 110,
    author: 'Ana C Bouvier',
    genre: ['Drama', 'Adventure', 'Romance'],
    readed: '13k',
    description:
      'This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!',
    backgroundColor: 'rgba(119,77,143,0.9)',
    navTintColor: '#FFF',
    url: image1
  };

  const bookTheCasablanca = {
    id: 11,
    bookName: 'Casablanca',
    bookCover: images.casablanca,
    rating: 4.8,
    language: 'Eng',
    pageNo: 134,
    author: 'Edgar Brau',
    genre: ['Drama', 'Romance', 'Crime'],
    readed: '21k',
    description:"Casablanca is an exploration of the universal themes of love and sacrifice, but when the film was released in 1942, audiences viewed it as a political allegory about World War II. The film is set in December 1941, the month in which the Japanese attacked Pearl Harbor.,A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco. The story of Rick Blaine, a cynical world-weary ex-patriate who runs a nightclub in Casablanca, Morocco during the early stages of WWII.",
        backgroundColor: 'rgba(119,77,143,0.9)',
    navTintColor: '#FFF',
    url: image10,
    link:"http://www.vincasa.com/casabla.pdf"
  };

  const myBooksData = [
    {
      ...bookEagleElite,
      completion: '69%',
      lastRead: '3d 5h',
    },
    {
      ...bookPrideAndPrejudice,
      completion: '75%',
      lastRead: '1d 2h',
    },
    {
      ...bookAlotlikeadios,
      completion: '78%',
      lastRead: '4d 8h',
    },
    {
      ...bookTheMetropolis,
      completion: '23%',
      lastRead: '10d 5h',
    },
    {
      ...bookTheTempest,
      completion: '87%',
      lastRead: '7d 8h',
    },
    {
      ...bookTheJuliusCaesar,
      completion: '77%',
      lastRead: '4d 8h',
    },
    {
      ...bookTheRomeoandJuliet,
      completion: '97%',
      lastRead: '2d 9h',
    },
    {
      ...bookTheMurderonOrientExpress,
      completion: '74%',
      lastRead: '11d 10h',
    },
    {
      ...bookTheMacbeth,
      completion: '66%',
      lastRead: '5d 2h',
    },
    {
      ...bookTheCasablanca,
      completion: '70%',
      lastRead: '12d 20h',
    },
    {
      ...bookTheTinyDragon,
      completion: '10%',
      lastRead: '1d 2h',
    },
  ];

  const categoriesData = [
    {
      id: 1,
      categoryName: 'Best Seller',
      books: [bookEagleElite,bookTheRomeoandJuliet, bookPrideAndPrejudice, bookTheTinyDragon,bookTheTempest],
    },
    {
      id: 2,
      categoryName: 'Precious G-Old',
      books: [bookPrideAndPrejudice, bookTheJuliusCaesar,bookTheRomeoandJuliet,bookTheMacbeth,bookTheMurderonOrientExpress,bookTheTempest,],
    },
    {
      id: 3,
      categoryName: 'The Latest',
      books: [bookEagleElite,bookTheMetropolis,bookAlotlikeadios,bookTheTinyDragon,bookTheCasablanca],
    },
    {
      id: 4,
      categoryName: 'Coming Soon',
      books: [bookTheTinyDragon],
    },
  ];

  const [profile, setProfile] = React.useState(profileData);
  const [myBooks, setMyBooks] = React.useState(myBooksData);
  const [categories, setCategories] = React.useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = React.useState(1);
  //represents the initial state

  function renderHeader(profile) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingHorizontal: 21,
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}>
          <View style={{marginRight: SIZES.padding}}>
            <Text style={{...FONTS.h3, color: COLORS.white}}>Good Morning  🔥</Text>
            <Text style={{...FONTS.h3, color: COLORS.white}}>
              {profile.name}👋
            </Text>
          </View>
        </View>

        {/* POINTS */}
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            height: 30,
            paddingLeft: 3,
            paddingRight: SIZES.radius,
            borderRadius: 20,
          }}
          onPress={() => {}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 25,
                backgroundColor: 'rgba(0,0,0,0.5',
              }}>
              <Image
                source={icons.plus_icon}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </View>
            <Text
              style={{
                marginLeft: SIZES.base,
                color: COLORS.white,
                ...FONTS.body3,
              }}>
              {profile.point} points
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  function renderButtonSection() {
    return (
      <View style={{flex: 1, justifyContent: 'center', padding: 29}}>
        <View
          style={{
            flexDirection: 'row',
            height: 70,
            backgroundColor: COLORS.secondary,
            borderRadius: SIZES.radius,
          }}>
          {/* Claim */}
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => console.log('Claim')}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.claim_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}>
                Claim
              </Text>
            </View>
          </TouchableOpacity>

          {/* DIVIDER */}
          <LineDivider />
          {/* GETPOINT */}
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => console.log('Get Point')}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.point_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}>
                Get Point
              </Text>
            </View>
          </TouchableOpacity>

          {/* DIVIDER */}
          <LineDivider />
          {/* MY CARD */}
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => console.log('My Card')}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.card_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}>
                My Card
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  function renderMyBookSection(myBooks) {
    const renderItem = ({item, index}) => {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            marginLeft: index == 0 ? SIZES.padding : 0,
            marginRight: SIZES.radius,
          }}
          onPress={() =>
            navigation.navigate('BookDetail', {
              book: item,
            })
          }>
          {/* Book Cover */}
          <Image
            source={item.bookCover}
            resizeMode="cover"
            style={{
              width: 150,
              height: 230,
              borderRadius: 20,
            }}
          />

          {/* Book Info */}
          <View
            style={{
              marginTop: SIZES.radius,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={icons.clock_icon}
              style={{
                width: 15,
                height: 15,
                tintColor: COLORS.lightGray,
              }}
            />
            <Text
              style={{marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray}}>
              {item.lastRead}
            </Text>

            <Image
              source={icons.page_icon}
              style={{
                marginLeft: SIZES.radius,
                width: 15,
                height: 15,
                tintColor: COLORS.lightGray,
              }}
            />
            <Text
              style={{marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray}}>
              {item.completion}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <View style={{flex: 1}}>
        {/* Header */}
        <View
          style={{
            paddingHorizontal: 19,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{...FONTS.h2, color: COLORS.white}}>My Book</Text>

          <TouchableOpacity onPress={() => console.log('See More')}>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.lightGray,
                alignSelf: 'flex-start',
                textDecorationLine: 'underline',
              }}>
              see more
            </Text>
          </TouchableOpacity>
        </View>

        {/* Books */}
        <View style={{flex: 1, marginTop: SIZES.padding}}>
          <FlatList
            data={myBooks}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }

  function renderCategoryHeader() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{flex: 1, marginRight: SIZES.padding}}
          onPress={() => setSelectedCategory(item.id)}
          //setting id for pressed category in the use state
        >
          {selectedCategory == item.id && (
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                fontSize: 19,
                lineHeight: 22,
                color: COLORS.white,
              }}>
              {item.categoryName}
            </Text>
          )}
          {selectedCategory != item.id && (
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                fontSize: 19,
                lineHeight: 22,
                color: COLORS.lightGray,
              }}>
              {item.categoryName}
            </Text>
          )}
        </TouchableOpacity>
      );
    };

    return (
      <View style={{flex: 1, paddingLeft: SIZES.padding}}>
        <FlatList
          data={categories}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          horizontal
        />
      </View>
    );
  }

  function renderCategoryData() {
    var books = [];

    let selectedCategoryBooks = categories.filter(
      a => a.id == selectedCategory,
    );
    //uses value updated by above fn

    if (selectedCategoryBooks.length > 0) {
      books = selectedCategoryBooks[0].books;
    }

    const renderItem = ({item}) => {
      return (
        <View style={{marginVertical: SIZES.base}}>
          <TouchableOpacity
            style={{flex: 1, flexDirection: 'row'}}
            onPress={() =>
              navigation.navigate('BookDetail', {
                book: item,
              })
            }>
            {/* Book Cover */}
            <Image
              source={item.bookCover}
              resizeMode="cover"
              style={{width: 100, height: 150, borderRadius: 10}}
            />

            <View style={{flex: 1, marginLeft: SIZES.radius}}>
              {/* Book name and author */}
              <View>
                <Text
                  style={{
                    paddingRight: SIZES.padding,
                    fontFamily: 'Roboto-Bold',
                    fontSize: 18,
                    lineHeight: 22,
                    color: COLORS.white,
                  }}>
                  {item.bookName}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Roboto-Bold',
                    fontSize: 15,
                    lineHeight: 22,
                    color: COLORS.lightGray,
                  }}>
                  {item.author}
                </Text>
              </View>

              {/* Book Info */}
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Image
                  source={icons.page_filled_icon}
                  resizeMode="contain"
                  style={{
                    width: 17,
                    height: 17,
                    tintColor: COLORS.lightGray,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.lightGray,
                    paddingHorizontal: SIZES.radius,
                  }}>
                  {item.pageNo}
                </Text>

                <Image
                  source={icons.read_icon}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.lightGray,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.lightGray,
                    paddingHorizontal: SIZES.radius,
                  }}>
                  {item.readed}
                </Text>
              </View>

              {/* Genre */}
              <View style={{flexDirection: 'row', marginTop: 7}}>
                {item.genre.includes('Adventure') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: 5,
                      backgroundColor: COLORS.darkGreen,
                      height: 35,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightGreen}}>
                      Adventure
                    </Text>
                  </View>
                )}
                {item.genre.includes('Romance') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkRed,
                      height: 35,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightRed}}>
                      Romance
                    </Text>
                  </View>
                )}
                {item.genre.includes('Drama') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkGreen,
                      height: 35,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightGreen}}>
                      Drama
                    </Text>
                  </View>
                )}
                {item.genre.includes('Classic Regency') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkRed,
                      height: 35,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightGray3}}>
                Classic Regency
                    </Text>
                  </View>
                )}
                {item.genre.includes('Humour') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkGreen,
                      height: 35,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightGreen}}>
           Humour
                    </Text>
                  </View>
                )}
                {item.genre.includes('Fiction') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkGreen,
                      height: 35,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightRed}}>
           Fiction
                    </Text>
                  </View>
                )}
                {item.genre.includes('Tragic Comedy ') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkRed,
                      height: 35,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightBlue}}>
                     Tragic Comedy
                    </Text>
                  </View>
                )}
                {item.genre.includes('Classic Shakespeare') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.lightGray3,
                      height: 35,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightBlue}}>
                 Classic Shakespeare
                    </Text>
                  </View>
                )}

                {item.genre.includes('History play') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkGreen,
                      height: 35,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightRed}}>
                    History Play
                    </Text>
                  </View>
                )}
                {item.genre.includes('Tragedy') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkRed,
                      height: 35,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightGray4}}>
                    Tragedy
                    </Text>
                  </View>
                )}
                {item.genre.includes('Gothic') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkRed,
                      height: 35,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightGreen}}>
                    Gothic
                    </Text>
                  </View>
                )}
                {item.genre.includes('Crime') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkRed,
                      height: 35,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightRed}}>

                Crime
                    </Text>
                  </View>
                )}
                {item.genre.includes('Thriller') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkGreen,
                      height: 35,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightGray3}}>
               Thriller
                    </Text>
                  </View>
                )}
       
                {item.genre.includes('Mystery') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkRed,
                      height: 35,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightGreen}}>
                   Mystery
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>

          {/* Bookmark Button */}
          <TouchableOpacity
            style={{position: 'absolute', top: 5, right: 15}}
            onPress={()=>{"Bookmarked"}}>
            <Image
              source={icons.bookmark_icon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.lightGray,
              }}
            />
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <View
        style={{flex: 1, marginTop: SIZES.radius, paddingLeft: SIZES.padding}}>
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
      {/* Header Section */}
      <View style={{height: 200}}>
        {renderHeader(profile)}
        {renderButtonSection()}
      </View>

      {/* Body Section */}
      <ScrollView style={{marginTop:16}}>
        {/* BOOKS SECTION */}
        <View>{renderMyBookSection(myBooks)}</View>
        {/* Categories Section */}
        <View style={{marginTop: SIZES.padding}}>
          <View>{renderCategoryHeader()}</View>
          <View>{renderCategoryData()}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
