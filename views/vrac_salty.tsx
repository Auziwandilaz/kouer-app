import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import IconSearch from '../components/svg/icon_search';
import IconSalty from '../components/svg/icon_salty';
import { LinearGradient } from 'expo-linear-gradient';
import { Rating } from '@kolking/react-native-rating';

import { supabase } from '../lib/supabase';
import IconShopBag from '../components/svg/icon_shopbag';
import IconFilters from '../components/svg/icon_filters';
import IconPlus from '../components/svg/icon_plus';
import Collapsible from 'react-native-collapsible';
import IconNext from '../components/svg/icon_next';
import IconMinus from '../components/svg/icon_minus';
import IconCross from '../components/svg/icon_cross';
import { RadioButton } from 'react-native-radio-buttons-group';

import { theme_salty as theme } from '../lib/constants';
import { Filters } from '../lib/constants';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function VracSalty({ navigation }) {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const [originFilter, setOriginFilter] = useState([]);
  const [originCollapse, setOriginCollapse] = useState(true);
  const [originText, setOriginText] = useState('');

  const [priceTags, setPriceTags] = useState([]);
  const [priceCollapse, setPriceCollapse] = useState(true);

  const [ratingFilter, setRatingFilter] = useState([]);
  const [ratingCollapse, setRatingCollapse] = useState(true);

  const [searchFilter, setSearchFilter] = useState([]);
  const [searchCollapse, setSearchCollapse] = useState(true);
  const [searchText, setSearchText] = useState('');

  const [sortFilter, setSortFilter] = useState('');
  const [sortCollapse, setSortCollapse] = useState(true);

  // Requesting product data
  useEffect(() => {
    (async () => {
      await supabase
        .rpc('get_products_by_categories', {
          category_names: [theme.category],
        })
        .then((ret) => {
          setData(ret.data[0].products);
          setDisplayData(ret.data[0].products);
        });
    })();
  }, []);

  return (
    <SafeAreaView className='flex-1'>
      {/* Vrac View */}
      <View className={`flex-1 ${showFilter ? 'hidden' : ''}`}>
        <View className='h-[25vh]'>
          <LinearGradient
            className='flex-row h-[15vh] rounded-b-[50px] items-center justify-center'
            colors={theme.gradientColors}
            start={{ x: 0, y: -0.75 }}
            end={{ x: 0, y: 1 }}
          >
            <IconSalty className='w-12 mr-2' />
            <Text className='font-medium text-2xl text-white'>
              {theme.title}
            </Text>
          </LinearGradient>
          <View className='w-full -mt-4 px-5'>
            <View
              className='rounded-full shadow-lg shadow-black bg-white'
              style={{ elevation: 10 }}
            >
              <TextInput
                className='px-5 py-2 font-light text-lg'
                placeholder='Rechercher sur Kouer'
              />
              <View className='absolute inset-y-0 right-0.5 justify-center'>
                <LinearGradient
                  className='w-16 h-[90%] py-2 rounded-full'
                  colors={theme.gradientColors}
                  start={{ x: -0.1, y: -0.1 }}
                  end={{ x: 1, y: 1 }}
                >
                  <IconSearch
                    className='w-full h-full'
                    color='white'
                  />
                </LinearGradient>
              </View>
            </View>
          </View>
        </View>
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ marginVertical: 10 }}
          data={displayData}
          renderItem={(data) => {
            return (
              <View className='flex-[0.5] h-[25vh] mx-[10] p-[5] rounded-[10px] justify-between bg-white'>
                <Image
                  className='w-full h-1/2 rounded-[5px]'
                  source={{ uri: data.item.p_images[0] }}
                />
                <View className='h-1/3 pt-1 justify-between'>
                  <Text
                    className='font-medium text-xs text-[#505050]'
                    numberOfLines={2}
                  >
                    {data.item.title}
                  </Text>
                  <View className='flex-row items-center'>
                    <Text className='font-medium text-base text-[#4EA04C]'>
                      {data.item.product_unit_price}€
                    </Text>
                    <Text className='font-medium text-xs text-[#aaa]'>
                      {` / ${data.item.unit_type}`}
                    </Text>
                  </View>
                </View>
                <View className='flex-row w-full justify-between'>
                  <View>
                    <Rating
                      rating={2.5}
                      maxRating={5}
                      size={10}
                      baseColor='#D9D9D9'
                      fillColor='#FFE352'
                    />
                    <Text className='text-[#aaa]'>? avis</Text>
                  </View>
                  <TouchableOpacity activeOpacity={0.6}>
                    <IconShopBag
                      className='w-8 h-8'
                      color='#4EA04C'
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />

        {/* Filter button */}
        <View className='absolute inset-x-0 bottom-4 items-center'>
          <View>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setShowFilter(!showFilter);
              }}
            >
              <LinearGradient
                className='flex-row w-24 h-8 px-2 rounded-full items-center justify-around'
                colors={theme.gradientColors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <IconFilters className='w-6 h-6' />
                <Text className='font-medium text-base text-white'>
                  Filtres
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Filter overlay */}
      <View className={`flex-1 ${showFilter ? '' : 'hidden'}`}>
        {/* Header */}
        <View className='flex-row w-full h-20 p-[10] border-b border-b-[#4EA04C] items-end justify-between bg-white'>
          <Text className='text-xl text-[#4EA04C]'>Filtres</Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              setOriginFilter([]);
              setPriceTags([]);
              setRatingFilter([]);
              setSearchFilter([]);
              setSortFilter('');
            }}
          >
            <Text className='text-[#505050] font-medium'>Tout effacer</Text>
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <TouchableOpacity
          className='flex-row h-[50] pl-[10] border-b border-b-[#e3e3e3] items-center justify-between bg-white'
          activeOpacity={0.6}
          onPress={() => {}}
        >
          <Text className='text-xl text-[#505050]'>Catégories</Text>
          <IconNext
            className='w-[20] h-1/3 mr-[5]'
            color='#505050'
          />
        </TouchableOpacity>

        {/* Search */}
        <TouchableWithoutFeedback
          onPress={() => setSearchCollapse(!searchCollapse)}
        >
          <View className='flex-row h-[50] pl-[5] border-b border-b-[#E3E3E3] bg-[#4EA04C]'>
            <View className='flex-row w-full items-center justify-between bg-white'>
              <View className='pl-[5]'>
                <Text className='text-xl text-[#505050]'>Recherche</Text>
                <Text className='text-[10px] text-[#AAA]'>{`- ${searchFilter
                  .join(' - ')
                  .trimEnd()}`}</Text>
              </View>
              {/* Conditional Rendering of + or - symbol */}
              {searchCollapse ? (
                <IconPlus
                  className='w-[20] h-full mr-[5]'
                  color='#505050'
                />
              ) : (
                <IconMinus
                  className='w-[20] h-full mr-[5]'
                  color='#505050'
                />
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
        <Collapsible
          className='px-5'
          collapsed={searchCollapse}
        >
          <View
            className={`flex-row w-full h-8 mt-5 ${
              searchFilter.length > 0 ? 'mb-1' : ''
            }`}
          >
            <TextInput
              className='flex-1 px-4 rounded-full border border-[#E3E3E3] bg-white'
              placeholder='Rechercher un produit'
              value={searchText}
              onChangeText={(text) => {
                setSearchText(text);
              }}
              onSubmitEditing={() => {
                setSearchFilter(searchFilter.concat([searchText]));
                setSearchText('');
              }}
            />
          </View>
          <View className='flex-row flex-wrap -ml-2 mb-5'>
            {searchFilter.map((e) => {
              return (
                <View className='flex-row h-8 mt-1 ml-2 px-3 self-start items-center rounded-full border border-[#E3E3E3] bg-white'>
                  <Text className='font-medium text-sm text-[#505050]'>
                    {e}
                  </Text>
                  <TouchableOpacity
                    id='7489'
                    activeOpacity={1}
                    onPress={(e) => {}}
                  >
                    <IconCross
                      className='w-3 h-3 ml-2'
                      color='#505050'
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </Collapsible>

        {/* Origin */}
        <TouchableWithoutFeedback
          onPress={() => setOriginCollapse(!originCollapse)}
        >
          <View className='flex-row h-[50] pl-[5] border-b border-b-[#E3E3E3] bg-[#4EA04C]'>
            <View className='flex-row w-full items-center justify-between bg-white'>
              <View className='pl-[5]'>
                <Text className='text-xl text-[#505050]'>Localisation</Text>
                <Text className='text-[10px] text-[#AAA]'>{`- ${originFilter
                  .join(' - ')
                  .trimEnd()}`}</Text>
              </View>
              {/* Conditional Rendering of + or - symbol */}
              {originCollapse ? (
                <IconPlus
                  className='w-[20] h-full mr-[5]'
                  color='#505050'
                />
              ) : (
                <IconMinus
                  className='w-[20] h-full mr-[5]'
                  color='#505050'
                />
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
        <Collapsible
          className='px-5'
          collapsed={originCollapse}
        >
          <View
            className={`flex-row w-full h-8 mt-5 ${
              originFilter.length > 0 ? 'mb-1' : ''
            }`}
          >
            <TextInput
              className='flex-1 px-4 rounded-full border border-[#E3E3E3] bg-white'
              placeholder='Rechercher un produit'
              value={originText}
              onChangeText={(text) => {
                setOriginText(text);
              }}
              onSubmitEditing={() => {
                setOriginFilter(originFilter.concat([originText]));
                setOriginText('');
              }}
            />
          </View>
          <View className='flex-row flex-wrap -ml-2 mb-5'>
            {searchFilter.map((e) => {
              return (
                <View className='flex-row h-8 mt-1 ml-2 px-3 self-start items-center rounded-full border border-[#E3E3E3] bg-white'>
                  <Text className='font-medium text-sm text-[#505050]'>
                    {e}
                  </Text>
                  <TouchableOpacity
                    id='7489'
                    activeOpacity={1}
                    onPress={(e) => {}}
                  >
                    <IconCross
                      className='w-3 h-3 ml-2'
                      color='#505050'
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </Collapsible>

        {/* Sort */}
        <TouchableWithoutFeedback
          onPress={() => setSortCollapse(!sortCollapse)}
        >
          <View className='h-[50] pl-[10] border-b border-b-[#E3E3E3] bg-white'>
            <View className='flex-row w-full items-center justify-between bg-white'>
              <View className='pl-[5]'>
                <Text className='text-xl text-[#505050]'>Classé par</Text>
                <Text className='text-[10px] text-[#AAA]'>{`- ${sortFilter}`}</Text>
              </View>
              {/* Conditional Rendering of + or - symbol */}
              {sortCollapse ? (
                <IconPlus
                  className='w-[20] h-full mr-[5]'
                  color='#505050'
                />
              ) : (
                <IconMinus
                  className='w-[20] h-full mr-[5]'
                  color='#505050'
                />
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
        <Collapsible collapsed={sortCollapse}>
          <View className='px-5 py-2'>
            {Object.keys(Filters.sortFunctions).map((item) => {
              return (
                <View className='flex-row w-full h-5 my-2 justify-between'>
                  <Text className='text-[15px] text-[#505050]'>{item}</Text>
                  <RadioButton
                    id={item}
                    selected={item === sortFilter}
                    onPress={(item) => {
                      setSortFilter(item !== sortFilter ? item : '');
                    }}
                  />
                </View>
              );
            })}
          </View>
        </Collapsible>

        {/* Price */}
        <TouchableWithoutFeedback
          onPress={() => setPriceCollapse(!priceCollapse)}
        >
          <View className='flex-row h-[50] pl-[5] border-b border-b-[#E3E3E3] bg-[#4EA04C]'>
            <View className='flex-row w-full items-center justify-between bg-white'>
              <View className='pl-[5]'>
                <Text className='text-xl text-[#505050]'>Prix</Text>
                <Text className='text-[10px] text-[#AAA]'>{`- ${priceTags
                  .join(' - ')
                  .trimEnd()}`}</Text>
              </View>
              {/* Conditional Rendering of + or - symbol */}
              {priceCollapse ? (
                <IconPlus
                  className='w-[20] h-full mr-[5]'
                  color='#505050'
                />
              ) : (
                <IconMinus
                  className='w-[20] h-full mr-[5]'
                  color='#505050'
                />
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
        <Collapsible collapsed={priceCollapse}>
          <View className='px-5 py-2'>
            {Object.keys(Filters.priceFilters).map((item) => {
              return (
                <View className='flex-row w-full h-5 my-2 justify-between'>
                  <Text className='text-[15px] text-[#505050]'>{item}</Text>
                  <RadioButton
                    id={item}
                    selected={priceTags.includes(item)}
                    onPress={(item) => {
                      setPriceTags(
                        !priceTags.includes(item)
                          ? priceTags.concat(item)
                          : priceTags.filter((e) => e !== item)
                      );
                    }}
                  />
                </View>
              );
            })}
          </View>
        </Collapsible>

        {/* Rating */}
        <TouchableWithoutFeedback
          onPress={() => setRatingCollapse(!ratingCollapse)}
        >
          <View
            className={`flex-row h-[50] pl-[5] border-b border-b-[#E3E3E3] bg-[#4EA04C]`}
          >
            <View className='flex-row w-full items-center justify-between bg-white'>
              <View className='pl-[5]'>
                <Text className='text-xl text-[#505050]'>Note du produit</Text>
                <Text className='text-[10px] text-[#AAA]'>{`- ${ratingFilter
                  .join(' - ')
                  .trimEnd()}`}</Text>
              </View>
              {/* Conditional Rendering of + or - symbol */}
              {ratingCollapse ? (
                <IconPlus
                  className='w-[20] h-full mr-[5]'
                  color='#505050'
                />
              ) : (
                <IconMinus
                  className='w-[20] h-full mr-[5]'
                  color='#505050'
                />
              )}
            </View>
            <Collapsible collapsed>
              <Text>truc</Text>
            </Collapsible>
          </View>
        </TouchableWithoutFeedback>
        <Collapsible collapsed={ratingCollapse}>
          <View className='px-5 py-2'>
            {Object.keys(Filters.ratingFilters).map((item) => {
              return (
                <View className='flex-row w-full h-5 my-2 justify-between'>
                  <View className='flex-row'>
                    <Text className='mr-4 text-[15px] text-[#505050]'>
                      {item} et plus
                    </Text>
                    <Rating
                      rating={+item}
                      maxRating={5}
                      size={20}
                      baseColor='#D9D9D9'
                      fillColor='#EEBA00'
                    />
                  </View>
                  <RadioButton
                    id={item}
                    selected={ratingFilter.includes(item)}
                    onPress={(item) => {
                      setRatingFilter(
                        !ratingFilter.includes(item)
                          ? ratingFilter.concat(item)
                          : ratingFilter.filter((e) => e !== item)
                      );
                    }}
                  />
                </View>
              );
            })}
          </View>
        </Collapsible>

        {/* Apply filter button */}
        <View className='absolute bottom-[10] left-0 right-0 items-center'>
          <View className='rounded-full bg-[#A4DF75]'>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setShowFilter(!showFilter);
                let tmp = data.filter((product) => {
                  if (priceTags.length === 0) return true;
                  return priceTags.some((filter) =>
                    Filters.priceFilters[filter](product.product_unit_price)
                  );
                });
                tmp.sort(Filters.sortFunctions[sortFilter]);
                setDisplayData(tmp);
              }}
            >
              <LinearGradient
                className='h-[35] px-[10] rounded-full justify-center'
                colors={theme.gradientColors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text className='font-medium text-[15px] text-white'>
                  Appliquer les filtres
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
