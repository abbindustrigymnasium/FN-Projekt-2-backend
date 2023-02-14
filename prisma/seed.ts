import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  // const deleteUsers = await prisma.country.deleteMany({})
  // const deleteDevs = await prisma.devInfo.deleteMany({})
  // console.log({deleteUsers})
  // console.log({deleteDevs})


  //   const countryData = await prisma.country.createMany({
  //       data: [
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1965,
  //           energy_cons: 24.832647
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1966,
  //           energy_cons: 29.832527
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1967,
  //           energy_cons: 28.247406
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1968,
  //           energy_cons: 30.344986
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1969,
  //           energy_cons: 33.539192
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1970,
  //           energy_cons: 36.7589
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1971,
  //           energy_cons: 39.732845
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1972,
  //           energy_cons: 44.64785
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1973,
  //           energy_cons: 53.25068
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1974,
  //           energy_cons: 58.908936
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1975,
  //           energy_cons: 70.36968
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1976,
  //           energy_cons: 82.10211
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1977,
  //           energy_cons: 90.2126
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1978,
  //           energy_cons: 113.36147
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1979,
  //           energy_cons: 148.5402
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1980,
  //           energy_cons: 177.14294
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1981,
  //           energy_cons: 215.18619
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1982,
  //           energy_cons: 248.11212
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1983,
  //           energy_cons: 270.96667
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1984,
  //           energy_cons: 260.1962
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1985,
  //           energy_cons: 262.29657
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1986,
  //           energy_cons: 277.49054
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1987,
  //           energy_cons: 285.1681
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1988,
  //           energy_cons: 305.4218
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1989,
  //           energy_cons: 297.06827
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1990,
  //           energy_cons: 314.97372
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1991,
  //           energy_cons: 312.0951
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1992,
  //           energy_cons: 320.2269
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1993,
  //           energy_cons: 297.995
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1994,
  //           energy_cons: 301.9211
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1995,
  //           energy_cons: 313.14484
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1996,
  //           energy_cons: 309.92474
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1997,
  //           energy_cons: 297.85974
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1998,
  //           energy_cons: 308.349
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 1999,
  //           energy_cons: 311.43417
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 2000,
  //           energy_cons: 299.94565
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 2001,
  //           energy_cons: 310.81296
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 2002,
  //           energy_cons: 321.95053
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 2003,
  //           energy_cons: 336.92212
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 2004,
  //           energy_cons: 349.7778
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 2005,
  //           energy_cons: 366.27155
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 2006,
  //           energy_cons: 379.22003
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 2007,
  //           energy_cons: 399.63977
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 2008,
  //           energy_cons: 423.55692
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 2009,
  //           energy_cons: 448.85934
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 2010,
  //           energy_cons: 438.9949
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 2011,
  //           energy_cons: 464.48828
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 2012,
  //           energy_cons: 507.67188
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 2013,
  //           energy_cons: 536.9768
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 2014,
  //           energy_cons: 585.6133
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 2015,
  //           energy_cons: 617.5181
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 2016,
  //           energy_cons: 616.99585
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 2017,
  //           energy_cons: 623.7947
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 2018,
  //           energy_cons: 671.36145
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 2019,
  //           energy_cons: 694.88477
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 2020,
  //           energy_cons: 654.4135
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZA",
  //           year: 2021,
  //           energy_cons: 684.5841
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1965,
  //           energy_cons: 328.5189
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1966,
  //           energy_cons: 339.16492
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1967,
  //           energy_cons: 349.0211
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1968,
  //           energy_cons: 360.82986
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1969,
  //           energy_cons: 372.89758
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1970,
  //           energy_cons: 353.473
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1971,
  //           energy_cons: 374.7283
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1972,
  //           energy_cons: 379.43457
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1973,
  //           energy_cons: 396.4979
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1974,
  //           energy_cons: 412.2511
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1975,
  //           energy_cons: 403.01257
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1976,
  //           energy_cons: 422.67383
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1977,
  //           energy_cons: 441.4316
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1978,
  //           energy_cons: 442.0869
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1979,
  //           energy_cons: 474.6961
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1980,
  //           energy_cons: 471.9791
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1981,
  //           energy_cons: 458.00363
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1982,
  //           energy_cons: 466.5128
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1983,
  //           energy_cons: 486.20496
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1984,
  //           energy_cons: 487.49118
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1985,
  //           energy_cons: 481.63235
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1986,
  //           energy_cons: 508.85788
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1987,
  //           energy_cons: 531.8104
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1988,
  //           energy_cons: 540.7111
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1989,
  //           energy_cons: 521.4141
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1990,
  //           energy_cons: 513.0083
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1991,
  //           energy_cons: 521.32043
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1992,
  //           energy_cons: 559.296
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1993,
  //           energy_cons: 577.81586
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1994,
  //           energy_cons: 608.7478
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1995,
  //           energy_cons: 628.2231
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1996,
  //           energy_cons: 657.10175
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1997,
  //           energy_cons: 664.74176
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1998,
  //           energy_cons: 688.41174
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 1999,
  //           energy_cons: 695.91895
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 2000,
  //           energy_cons: 698.73694
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 2001,
  //           energy_cons: 682.47076
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 2002,
  //           energy_cons: 654.42
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 2003,
  //           energy_cons: 701.42535
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 2004,
  //           energy_cons: 744.8173
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 2005,
  //           energy_cons: 790.601
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 2006,
  //           energy_cons: 830.5694
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 2007,
  //           energy_cons: 866.7823
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 2008,
  //           energy_cons: 878.034
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 2009,
  //           energy_cons: 853.54065
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 2010,
  //           energy_cons: 884.899
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 2011,
  //           energy_cons: 909.35144
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 2012,
  //           energy_cons: 944.9527
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 2013,
  //           energy_cons: 982.85645
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 2014,
  //           energy_cons: 979.85785
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 2015,
  //           energy_cons: 996.53436
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 2016,
  //           energy_cons: 991.69147
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 2017,
  //           energy_cons: 990.5849
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 2018,
  //           energy_cons: 983.4817
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 2019,
  //           energy_cons: 930.8073
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 2020,
  //           energy_cons: 880.8596
  //         },
  //         {
  //           name: "Argentina",
  //           code: "ARG",
  //           year: 2021,
  //           energy_cons: 953.4126
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1965,
  //           energy_cons: 425.76004
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1966,
  //           energy_cons: 446.10153
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1967,
  //           energy_cons: 473.09305
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1968,
  //           energy_cons: 501.69376
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1969,
  //           energy_cons: 522.4283
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1970,
  //           energy_cons: 570.1016
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1971,
  //           energy_cons: 598.8076
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1972,
  //           energy_cons: 626.09503
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1973,
  //           energy_cons: 669.3559
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1974,
  //           energy_cons: 711.90106
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1975,
  //           energy_cons: 723.9002
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1976,
  //           energy_cons: 749.0882
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1977,
  //           energy_cons: 785.9685
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1978,
  //           energy_cons: 811.2209
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1979,
  //           energy_cons: 841.29144
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1980,
  //           energy_cons: 844.24695
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1981,
  //           energy_cons: 857.7939
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1982,
  //           energy_cons: 849.9195
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1983,
  //           energy_cons: 820.9392
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1984,
  //           energy_cons: 852.42004
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1985,
  //           energy_cons: 877.56995
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1986,
  //           energy_cons: 894.90497
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1987,
  //           energy_cons: 921.18176
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1988,
  //           energy_cons: 963.4507
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1989,
  //           energy_cons: 1012.0838
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1990,
  //           energy_cons: 1033.0594
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1991,
  //           energy_cons: 1025.3059
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1992,
  //           energy_cons: 1042.1882
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1993,
  //           energy_cons: 1064.0782
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1994,
  //           energy_cons: 1105.4661
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1995,
  //           energy_cons: 1154.299
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1996,
  //           energy_cons: 1188.1368
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1997,
  //           energy_cons: 1217.2881
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1998,
  //           energy_cons: 1246.3306
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 1999,
  //           energy_cons: 1297.3473
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 2000,
  //           energy_cons: 1305.2595
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 2001,
  //           energy_cons: 1315.3854
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 2002,
  //           energy_cons: 1341.7451
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 2003,
  //           energy_cons: 1360.8623
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 2004,
  //           energy_cons: 1404.4441
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 2005,
  //           energy_cons: 1410.3502
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 2006,
  //           energy_cons: 1470.8379
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 2007,
  //           energy_cons: 1506.1671
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 2008,
  //           energy_cons: 1531.7455
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 2009,
  //           energy_cons: 1509.5446
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 2010,
  //           energy_cons: 1508.8386
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 2011,
  //           energy_cons: 1555.7201
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 2012,
  //           energy_cons: 1532.875
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 2013,
  //           energy_cons: 1552.3206
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 2014,
  //           energy_cons: 1562.99
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 2015,
  //           energy_cons: 1599.5605
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 2016,
  //           energy_cons: 1605.9487
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 2017,
  //           energy_cons: 1600.2698
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 2018,
  //           energy_cons: 1621.2384
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 2019,
  //           energy_cons: 1678.9082
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 2020,
  //           energy_cons: 1593.5947
  //         },
  //         {
  //           name: "Australia",
  //           code: "AUS",
  //           year: 2021,
  //           energy_cons: 1588.8898
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1965,
  //           energy_cons: 189.49828
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1966,
  //           energy_cons: 198.32507
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1967,
  //           energy_cons: 200.3635
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1968,
  //           energy_cons: 214.24158
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1969,
  //           energy_cons: 221.9265
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1970,
  //           energy_cons: 254.14923
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1971,
  //           energy_cons: 253.08414
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1972,
  //           energy_cons: 261.82578
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1973,
  //           energy_cons: 281.51013
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1974,
  //           energy_cons: 282.96216
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1975,
  //           energy_cons: 281.06357
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1976,
  //           energy_cons: 290.8937
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1977,
  //           energy_cons: 291.5977
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1978,
  //           energy_cons: 304.18985
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1979,
  //           energy_cons: 322.21716
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1980,
  //           energy_cons: 320.8738
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1981,
  //           energy_cons: 311.5201
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1982,
  //           energy_cons: 301.32162
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1983,
  //           energy_cons: 300.49518
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1984,
  //           energy_cons: 297.46863
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1985,
  //           energy_cons: 315.8056
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1986,
  //           energy_cons: 316.4346
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1987,
  //           energy_cons: 334.019
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1988,
  //           energy_cons: 329.1328
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1989,
  //           energy_cons: 330.9741
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1990,
  //           energy_cons: 335.16776
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1991,
  //           energy_cons: 351.5139
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1992,
  //           energy_cons: 345.97116
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1993,
  //           energy_cons: 352.1247
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1994,
  //           energy_cons: 349.96945
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1995,
  //           energy_cons: 367.03076
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1996,
  //           energy_cons: 367.50424
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1997,
  //           energy_cons: 375.26865
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1998,
  //           energy_cons: 381.283
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 1999,
  //           energy_cons: 389.93362
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 2000,
  //           energy_cons: 391.4246
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 2001,
  //           energy_cons: 405.36932
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 2002,
  //           energy_cons: 406.00696
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 2003,
  //           energy_cons: 410.25375
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 2004,
  //           energy_cons: 417.87036
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 2005,
  //           energy_cons: 425.16626
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 2006,
  //           energy_cons: 420.73196
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 2007,
  //           energy_cons: 411.80673
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 2008,
  //           energy_cons: 419.80075
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 2009,
  //           energy_cons: 406.77496
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 2010,
  //           energy_cons: 420.07358
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 2011,
  //           energy_cons: 393.3536
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 2012,
  //           energy_cons: 414.12357
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 2013,
  //           energy_cons: 411.30212
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 2014,
  //           energy_cons: 394.82852
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 2015,
  //           energy_cons: 395.28473
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 2016,
  //           energy_cons: 408.5202
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 2017,
  //           energy_cons: 417.62857
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 2018,
  //           energy_cons: 407.82776
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 2019,
  //           energy_cons: 428.21857
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 2020,
  //           energy_cons: 400.32065
  //         },
  //         {
  //           name: "Austria",
  //           code: "AUT",
  //           year: 2021,
  //           energy_cons: 411.86502
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 1985,
  //           energy_cons: 234.9505
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 1986,
  //           energy_cons: 252.83441
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 1987,
  //           energy_cons: 245.02277
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 1988,
  //           energy_cons: 245.20432
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 1989,
  //           energy_cons: 250.05185
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 1990,
  //           energy_cons: 260.55124
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 1991,
  //           energy_cons: 250.35124
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 1992,
  //           energy_cons: 214.39383
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 1993,
  //           energy_cons: 185.98021
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 1994,
  //           energy_cons: 170.86469
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 1995,
  //           energy_cons: 160.648
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 1996,
  //           energy_cons: 131.7407
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 1997,
  //           energy_cons: 126.15465
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 1998,
  //           energy_cons: 126.64517
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 1999,
  //           energy_cons: 126.09663
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 2000,
  //           energy_cons: 131.63098
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 2001,
  //           energy_cons: 126.903694
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 2002,
  //           energy_cons: 125.43
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 2003,
  //           energy_cons: 135.7226
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 2004,
  //           energy_cons: 153.89793
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 2005,
  //           energy_cons: 166.83739
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 2006,
  //           energy_cons: 164.09157
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 2007,
  //           energy_cons: 148.44637
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 2008,
  //           energy_cons: 149.87848
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 2009,
  //           energy_cons: 132.46538
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 2010,
  //           energy_cons: 130.84805
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 2011,
  //           energy_cons: 145.3658
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 2012,
  //           energy_cons: 149.61185
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 2013,
  //           energy_cons: 153.79831
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 2014,
  //           energy_cons: 156.67294
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 2015,
  //           energy_cons: 171.32796
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 2016,
  //           energy_cons: 169.73495
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 2017,
  //           energy_cons: 166.4798
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 2018,
  //           energy_cons: 171.30092
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 2019,
  //           energy_cons: 180.65569
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 2020,
  //           energy_cons: 177.38437
  //         },
  //         {
  //           name: "Azerbaijan",
  //           code: "AZE",
  //           year: 2021,
  //           energy_cons: 183.24664
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1971,
  //           energy_cons: 13.406879
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1972,
  //           energy_cons: 15.190602
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1973,
  //           energy_cons: 19.480253
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1974,
  //           energy_cons: 20.746552
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1975,
  //           energy_cons: 21.33111
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1976,
  //           energy_cons: 24.893011
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1977,
  //           energy_cons: 25.438211
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1978,
  //           energy_cons: 27.023924
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1979,
  //           energy_cons: 29.794897
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1980,
  //           energy_cons: 34.75038
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1981,
  //           energy_cons: 36.839695
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1982,
  //           energy_cons: 40.641346
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1983,
  //           energy_cons: 40.190193
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1984,
  //           energy_cons: 43.442524
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1985,
  //           energy_cons: 48.274105
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1986,
  //           energy_cons: 52.536575
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1987,
  //           energy_cons: 57.984547
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1988,
  //           energy_cons: 64.57637
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1989,
  //           energy_cons: 69.61425
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1990,
  //           energy_cons: 73.8564
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1991,
  //           energy_cons: 71.25461
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1992,
  //           energy_cons: 77.710556
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1993,
  //           energy_cons: 85.43575
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1994,
  //           energy_cons: 90.69007
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1995,
  //           energy_cons: 107.10863
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1996,
  //           energy_cons: 112.20246
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1997,
  //           energy_cons: 117.890816
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1998,
  //           energy_cons: 125.55918
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 1999,
  //           energy_cons: 126.98537
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 2000,
  //           energy_cons: 136.12083
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 2001,
  //           energy_cons: 155.58499
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 2002,
  //           energy_cons: 160.51143
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 2003,
  //           energy_cons: 170.11865
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 2004,
  //           energy_cons: 175.96452
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 2005,
  //           energy_cons: 189.75887
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 2006,
  //           energy_cons: 205.59164
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 2007,
  //           energy_cons: 210.42244
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 2008,
  //           energy_cons: 222.65332
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 2009,
  //           energy_cons: 244.66583
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 2010,
  //           energy_cons: 250.54083
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 2011,
  //           energy_cons: 272.26974
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 2012,
  //           energy_cons: 291.46484
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 2013,
  //           energy_cons: 300.32336
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 2014,
  //           energy_cons: 312.58813
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 2015,
  //           energy_cons: 363.5335
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 2016,
  //           energy_cons: 369.66437
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 2017,
  //           energy_cons: 384.1496
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 2018,
  //           energy_cons: 406.88986
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 2019,
  //           energy_cons: 452.58527
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 2020,
  //           energy_cons: 438.80627
  //         },
  //         {
  //           name: "Bangladesh",
  //           code: "BGD",
  //           year: 2021,
  //           energy_cons: 459.35425
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 1985,
  //           energy_cons: 408.0437
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 1986,
  //           energy_cons: 465.83835
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 1987,
  //           energy_cons: 472.61935
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 1988,
  //           energy_cons: 479.40497
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 1989,
  //           energy_cons: 463.66064
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 1990,
  //           energy_cons: 465.9725
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 1991,
  //           energy_cons: 464.90622
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 1992,
  //           energy_cons: 403.1557
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 1993,
  //           energy_cons: 337.11218
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 1994,
  //           energy_cons: 281.81354
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 1995,
  //           energy_cons: 250.70609
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 1996,
  //           energy_cons: 257.13818
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 1997,
  //           energy_cons: 260.10107
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 1998,
  //           energy_cons: 254.35074
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 1999,
  //           energy_cons: 247.41664
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 2000,
  //           energy_cons: 255.06027
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 2001,
  //           energy_cons: 247.9601
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 2002,
  //           energy_cons: 256.52618
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 2003,
  //           energy_cons: 254.58641
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 2004,
  //           energy_cons: 285.08063
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 2005,
  //           energy_cons: 284.15033
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 2006,
  //           energy_cons: 302.14648
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 2007,
  //           energy_cons: 294.7739
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 2008,
  //           energy_cons: 298.65994
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 2009,
  //           energy_cons: 282.56253
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 2010,
  //           energy_cons: 306.24835
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 2011,
  //           energy_cons: 300.73288
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 2012,
  //           energy_cons: 325.29752
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 2013,
  //           energy_cons: 294.82254
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 2014,
  //           energy_cons: 294.94397
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 2015,
  //           energy_cons: 267.03024
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 2016,
  //           energy_cons: 272.84192
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 2017,
  //           energy_cons: 277.86877
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 2018,
  //           energy_cons: 307.2527
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 2019,
  //           energy_cons: 308.82642
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 2020,
  //           energy_cons: 286.78275
  //         },
  //         {
  //           name: "Belarus",
  //           code: "BLR",
  //           year: 2021,
  //           energy_cons: 307.1885
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1965,
  //           energy_cons: 412.94122
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1966,
  //           energy_cons: 397.85898
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1967,
  //           energy_cons: 417.65488
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1968,
  //           energy_cons: 465.417
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1969,
  //           energy_cons: 510.77484
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1970,
  //           energy_cons: 539.59106
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1971,
  //           energy_cons: 529.33435
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1972,
  //           energy_cons: 562.7329
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1973,
  //           energy_cons: 570.326
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1974,
  //           energy_cons: 550.7826
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1975,
  //           energy_cons: 518.0192
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1976,
  //           energy_cons: 549.57935
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1977,
  //           energy_cons: 550.6024
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1978,
  //           energy_cons: 574.7143
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1979,
  //           energy_cons: 591.32294
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1980,
  //           energy_cons: 566.1064
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1981,
  //           energy_cons: 538.2972
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1982,
  //           energy_cons: 514.88
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1983,
  //           energy_cons: 498.9693
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1984,
  //           energy_cons: 521.4768
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1985,
  //           energy_cons: 544.3683
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1986,
  //           energy_cons: 561.7239
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1987,
  //           energy_cons: 578.6796
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1988,
  //           energy_cons: 590.204
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1989,
  //           energy_cons: 594.5705
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1990,
  //           energy_cons: 621.35266
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1991,
  //           energy_cons: 642.87976
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1992,
  //           energy_cons: 641.5093
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1993,
  //           energy_cons: 631.1829
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1994,
  //           energy_cons: 663.908
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1995,
  //           energy_cons: 672.1198
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1996,
  //           energy_cons: 713.8815
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1997,
  //           energy_cons: 721.2619
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1998,
  //           energy_cons: 735.3865
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 1999,
  //           energy_cons: 730.141
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 2000,
  //           energy_cons: 743.34845
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 2001,
  //           energy_cons: 736.85876
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 2002,
  //           energy_cons: 733.4745
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 2003,
  //           energy_cons: 761.69104
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 2004,
  //           energy_cons: 764.61993
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 2005,
  //           energy_cons: 756.11786
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 2006,
  //           energy_cons: 758.2411
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 2007,
  //           energy_cons: 763.46906
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 2008,
  //           energy_cons: 775.734
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 2009,
  //           energy_cons: 725.47314
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 2010,
  //           energy_cons: 773.2404
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 2011,
  //           energy_cons: 722.62683
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 2012,
  //           energy_cons: 692.8526
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 2013,
  //           energy_cons: 712.0007
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 2014,
  //           energy_cons: 661.85455
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 2015,
  //           energy_cons: 670.9188
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 2016,
  //           energy_cons: 723.4267
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 2017,
  //           energy_cons: 731.55
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 2018,
  //           energy_cons: 725.966
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 2019,
  //           energy_cons: 749.2948
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 2020,
  //           energy_cons: 676.6624
  //         },
  //         {
  //           name: "Belgium",
  //           code: "BEL",
  //           year: 2021,
  //           energy_cons: 757.257
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1965,
  //           energy_cons: 273.86963
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1966,
  //           energy_cons: 298.78015
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1967,
  //           energy_cons: 309.5791
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1968,
  //           energy_cons: 353.48602
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1969,
  //           energy_cons: 385.81198
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1970,
  //           energy_cons: 447.8507
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1971,
  //           energy_cons: 489.7429
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1972,
  //           energy_cons: 564.3462
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1973,
  //           energy_cons: 672.35297
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1974,
  //           energy_cons: 734.9126
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1975,
  //           energy_cons: 776.9935
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1976,
  //           energy_cons: 853.9071
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1977,
  //           energy_cons: 913.49023
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1978,
  //           energy_cons: 1006.74963
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1979,
  //           energy_cons: 1091.0348
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1980,
  //           energy_cons: 1114.936
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1981,
  //           energy_cons: 1087.9088
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1982,
  //           energy_cons: 1142.6521
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1983,
  //           energy_cons: 1166.9244
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1984,
  //           energy_cons: 1253.532
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1985,
  //           energy_cons: 1335.0942
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1986,
  //           energy_cons: 1421.9114
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1987,
  //           energy_cons: 1464.1683
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1988,
  //           energy_cons: 1521.061
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1989,
  //           energy_cons: 1552.0302
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1990,
  //           energy_cons: 1527.6405
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1991,
  //           energy_cons: 1586.8029
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1992,
  //           energy_cons: 1660.5278
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1993,
  //           energy_cons: 1734.8057
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1994,
  //           energy_cons: 1822.3461
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1995,
  //           energy_cons: 1913.4702
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1996,
  //           energy_cons: 2020.3541
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1997,
  //           energy_cons: 2135.7734
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1998,
  //           energy_cons: 2214.0981
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 1999,
  //           energy_cons: 2253.408
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 2000,
  //           energy_cons: 2293.647
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 2001,
  //           energy_cons: 2240.9014
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 2002,
  //           energy_cons: 2297.5798
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 2003,
  //           energy_cons: 2340.3977
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 2004,
  //           energy_cons: 2452.482
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 2005,
  //           energy_cons: 2522.9265
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 2006,
  //           energy_cons: 2587.6484
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 2007,
  //           energy_cons: 2746.5012
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 2008,
  //           energy_cons: 2861.8125
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 2009,
  //           energy_cons: 2845.3352
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 2010,
  //           energy_cons: 3134.2659
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 2011,
  //           energy_cons: 3276.8123
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 2012,
  //           energy_cons: 3339.2944
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 2013,
  //           energy_cons: 3454.7334
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 2014,
  //           energy_cons: 3536
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 2015,
  //           energy_cons: 3443.6716
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 2016,
  //           energy_cons: 3367.1714
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 2017,
  //           energy_cons: 3403.9307
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 2018,
  //           energy_cons: 3417.3855
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 2019,
  //           energy_cons: 3487.6162
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 2020,
  //           energy_cons: 3333.5862
  //         },
  //         {
  //           name: "Brazil",
  //           code: "BRA",
  //           year: 2021,
  //           energy_cons: 3490.4473
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1965,
  //           energy_cons: 119.92566
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1966,
  //           energy_cons: 128.56541
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1967,
  //           energy_cons: 149.34062
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1968,
  //           energy_cons: 166.93759
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1969,
  //           energy_cons: 186.0677
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1970,
  //           energy_cons: 209.35846
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1971,
  //           energy_cons: 217.997
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1972,
  //           energy_cons: 224.31827
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1973,
  //           energy_cons: 233.0736
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1974,
  //           energy_cons: 240.03056
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1975,
  //           energy_cons: 265.31277
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1976,
  //           energy_cons: 281.00388
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1977,
  //           energy_cons: 296.12656
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1978,
  //           energy_cons: 306.62213
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1979,
  //           energy_cons: 318.25372
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1980,
  //           energy_cons: 335.99197
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1981,
  //           energy_cons: 331.03433
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1982,
  //           energy_cons: 339.12576
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1983,
  //           energy_cons: 341.42764
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1984,
  //           energy_cons: 339.44876
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1985,
  //           energy_cons: 336.87866
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1986,
  //           energy_cons: 343.6344
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1987,
  //           energy_cons: 346.29468
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1988,
  //           energy_cons: 354.36853
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1989,
  //           energy_cons: 351.28802
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1990,
  //           energy_cons: 324.4368
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1991,
  //           energy_cons: 262.27646
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1992,
  //           energy_cons: 246.23763
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1993,
  //           energy_cons: 262.17844
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1994,
  //           energy_cons: 252.42413
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1995,
  //           energy_cons: 271.66025
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1996,
  //           energy_cons: 270.57645
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1997,
  //           energy_cons: 256.4836
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1998,
  //           energy_cons: 246.09898
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 1999,
  //           energy_cons: 215.0005
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 2000,
  //           energy_cons: 217.45586
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 2001,
  //           energy_cons: 224.71815
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 2002,
  //           energy_cons: 219.42427
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 2003,
  //           energy_cons: 227.59344
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 2004,
  //           energy_cons: 220.36473
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 2005,
  //           energy_cons: 238.49864
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 2006,
  //           energy_cons: 243.07184
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 2007,
  //           energy_cons: 235.27794
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 2008,
  //           energy_cons: 231.48009
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 2009,
  //           energy_cons: 202.57591
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 2010,
  //           energy_cons: 211.12697
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 2011,
  //           energy_cons: 224.32289
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 2012,
  //           energy_cons: 213.04353
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 2013,
  //           energy_cons: 197.33652
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 2014,
  //           energy_cons: 210.75429
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 2015,
  //           energy_cons: 224.0859
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 2016,
  //           energy_cons: 212.23286
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 2017,
  //           energy_cons: 216.89928
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 2018,
  //           energy_cons: 217.62419
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 2019,
  //           energy_cons: 210.12592
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 2020,
  //           energy_cons: 193.8516
  //         },
  //         {
  //           name: "Bulgaria",
  //           code: "BGR",
  //           year: 2021,
  //           energy_cons: 217.61569
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1965,
  //           energy_cons: 1389.0363
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1966,
  //           energy_cons: 1478.7911
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1967,
  //           energy_cons: 1546.2915
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1968,
  //           energy_cons: 1645.5902
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1969,
  //           energy_cons: 1745.3478
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1970,
  //           energy_cons: 1868.5634
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1971,
  //           energy_cons: 1927.1455
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1972,
  //           energy_cons: 2074.272
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1973,
  //           energy_cons: 2252.5435
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1974,
  //           energy_cons: 2323.3992
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1975,
  //           energy_cons: 2288.9375
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1976,
  //           energy_cons: 2396.989
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1977,
  //           energy_cons: 2535.5425
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1978,
  //           energy_cons: 2584.2163
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1979,
  //           energy_cons: 2660.2048
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1980,
  //           energy_cons: 2711.6936
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1981,
  //           energy_cons: 2695.77
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1982,
  //           energy_cons: 2614.628
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1983,
  //           energy_cons: 2600.305
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1984,
  //           energy_cons: 2766.1626
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1985,
  //           energy_cons: 2857.2751
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1986,
  //           energy_cons: 2884.924
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1987,
  //           energy_cons: 2977.6133
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1988,
  //           energy_cons: 3096.846
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1989,
  //           energy_cons: 3127.392
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1990,
  //           energy_cons: 3008.582
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1991,
  //           energy_cons: 3020.828
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1992,
  //           energy_cons: 3101.7253
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1993,
  //           energy_cons: 3180.0066
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1994,
  //           energy_cons: 3301.1558
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1995,
  //           energy_cons: 3381.887
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1996,
  //           energy_cons: 3474.036
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1997,
  //           energy_cons: 3491.2454
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1998,
  //           energy_cons: 3441.1694
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 1999,
  //           energy_cons: 3550.909
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 2000,
  //           energy_cons: 3647.4895
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 2001,
  //           energy_cons: 3572.098
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 2002,
  //           energy_cons: 3693.3928
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 2003,
  //           energy_cons: 3711.0212
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 2004,
  //           energy_cons: 3768.0676
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 2005,
  //           energy_cons: 3793.2559
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 2006,
  //           energy_cons: 3772.1829
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 2007,
  //           energy_cons: 3915.9626
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 2008,
  //           energy_cons: 3869.4036
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 2009,
  //           energy_cons: 3717.8606
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 2010,
  //           energy_cons: 3754.992
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 2011,
  //           energy_cons: 3896.988
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 2012,
  //           energy_cons: 3909.469
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 2013,
  //           energy_cons: 4004.413
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 2014,
  //           energy_cons: 4014.97
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 2015,
  //           energy_cons: 4040.926
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 2016,
  //           energy_cons: 3985.2878
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 2017,
  //           energy_cons: 4049.9978
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 2018,
  //           energy_cons: 4084.02
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 2019,
  //           energy_cons: 4064.001
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 2020,
  //           energy_cons: 3839.5674
  //         },
  //         {
  //           name: "Canada",
  //           code: "CAN",
  //           year: 2021,
  //           energy_cons: 3871.156
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1965,
  //           energy_cons: 73.02504
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1966,
  //           energy_cons: 78.28052
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1967,
  //           energy_cons: 79.806854
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1968,
  //           energy_cons: 79.490685
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1969,
  //           energy_cons: 85.64122
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1970,
  //           energy_cons: 90.401405
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1971,
  //           energy_cons: 97.779205
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1972,
  //           energy_cons: 101.0887
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1973,
  //           energy_cons: 97.226814
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1974,
  //           energy_cons: 96.318016
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1975,
  //           energy_cons: 86.86158
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1976,
  //           energy_cons: 91.31378
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1977,
  //           energy_cons: 94.72413
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1978,
  //           energy_cons: 100.26906
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1979,
  //           energy_cons: 103.609985
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1980,
  //           energy_cons: 107.021126
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1981,
  //           energy_cons: 109.82683
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1982,
  //           energy_cons: 100.77631
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1983,
  //           energy_cons: 103.63712
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1984,
  //           energy_cons: 108.412926
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1985,
  //           energy_cons: 110.100845
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1986,
  //           energy_cons: 115.11418
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1987,
  //           energy_cons: 120.83753
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1988,
  //           energy_cons: 134.60995
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1989,
  //           energy_cons: 147.90054
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1990,
  //           energy_cons: 155.6806
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1991,
  //           energy_cons: 174.9642
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1992,
  //           energy_cons: 194.19397
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1993,
  //           energy_cons: 205.22809
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1994,
  //           energy_cons: 215.48125
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1995,
  //           energy_cons: 232.23555
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1996,
  //           energy_cons: 245.84499
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1997,
  //           energy_cons: 281.05872
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1998,
  //           energy_cons: 281.47583
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 1999,
  //           energy_cons: 293.11523
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 2000,
  //           energy_cons: 310.68484
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 2001,
  //           energy_cons: 313.3449
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 2002,
  //           energy_cons: 324.46344
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 2003,
  //           energy_cons: 322.48975
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 2004,
  //           energy_cons: 338.5401
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 2005,
  //           energy_cons: 352.29303
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 2006,
  //           energy_cons: 376.0911
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 2007,
  //           energy_cons: 383.79047
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 2008,
  //           energy_cons: 381.3019
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 2009,
  //           energy_cons: 373.6261
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 2010,
  //           energy_cons: 374.74118
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 2011,
  //           energy_cons: 407.2822
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 2012,
  //           energy_cons: 417.2378
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 2013,
  //           energy_cons: 421.93552
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 2014,
  //           energy_cons: 413.5673
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 2015,
  //           energy_cons: 423.46033
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 2016,
  //           energy_cons: 444.33588
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 2017,
  //           energy_cons: 448.60403
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 2018,
  //           energy_cons: 468.0944
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 2019,
  //           energy_cons: 481.95456
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 2020,
  //           energy_cons: 449.95627
  //         },
  //         {
  //           name: "Chile",
  //           code: "CHL",
  //           year: 2021,
  //           energy_cons: 462.17493
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1965,
  //           energy_cons: 1536.1942
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1966,
  //           energy_cons: 1669.3079
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1967,
  //           energy_cons: 1501.0685
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1968,
  //           energy_cons: 1516.6959
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1969,
  //           energy_cons: 1845.1862
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1970,
  //           energy_cons: 2361.6985
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1971,
  //           energy_cons: 2800.1243
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1972,
  //           energy_cons: 3018.8367
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1973,
  //           energy_cons: 3186.893
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1974,
  //           energy_cons: 3286.7617
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1975,
  //           energy_cons: 3680.4417
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1976,
  //           energy_cons: 3874.8267
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1977,
  //           energy_cons: 4225.1523
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1978,
  //           energy_cons: 4632.0327
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1979,
  //           energy_cons: 4771.8257
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1980,
  //           energy_cons: 4827.534
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1981,
  //           energy_cons: 4763.8496
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1982,
  //           energy_cons: 4976.87
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1983,
  //           energy_cons: 5297.698
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1984,
  //           energy_cons: 5685.1445
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1985,
  //           energy_cons: 6150.371
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1986,
  //           energy_cons: 6444.1064
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1987,
  //           energy_cons: 6950.239
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1988,
  //           energy_cons: 7467.1123
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1989,
  //           energy_cons: 7836.4365
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1990,
  //           energy_cons: 7938.2495
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1991,
  //           energy_cons: 8337.61
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1992,
  //           energy_cons: 8773.709
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1993,
  //           energy_cons: 9457.634
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1994,
  //           energy_cons: 10048.8125
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1995,
  //           energy_cons: 10352.658
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1996,
  //           energy_cons: 10907.449
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1997,
  //           energy_cons: 10981.134
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1998,
  //           energy_cons: 11000.566
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 1999,
  //           energy_cons: 11386.068
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 2000,
  //           energy_cons: 11800.284
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 2001,
  //           energy_cons: 12470.063
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 2002,
  //           energy_cons: 13580.49
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 2003,
  //           energy_cons: 15818.756
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 2004,
  //           energy_cons: 18509.135
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 2005,
  //           energy_cons: 21027.164
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 2006,
  //           energy_cons: 23048.367
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 2007,
  //           energy_cons: 25049.293
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 2008,
  //           energy_cons: 26019.002
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 2009,
  //           energy_cons: 27158.898
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 2010,
  //           energy_cons: 29054.18
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 2011,
  //           energy_cons: 31333.574
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 2012,
  //           energy_cons: 32620.357
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 2013,
  //           energy_cons: 33847.848
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 2014,
  //           energy_cons: 34835.977
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 2015,
  //           energy_cons: 35283.02
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 2016,
  //           energy_cons: 35876.348
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 2017,
  //           energy_cons: 37112.145
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 2018,
  //           energy_cons: 38578.57
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 2019,
  //           energy_cons: 39978.492
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 2020,
  //           energy_cons: 40994.574
  //         },
  //         {
  //           name: "China",
  //           code: "CHN",
  //           year: 2021,
  //           energy_cons: 43790.895
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1965,
  //           energy_cons: 88.897484
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1966,
  //           energy_cons: 96.878876
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1967,
  //           energy_cons: 103.17065
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1968,
  //           energy_cons: 108.73809
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1969,
  //           energy_cons: 110.697205
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1970,
  //           energy_cons: 120.78872
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1971,
  //           energy_cons: 118.80279
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1972,
  //           energy_cons: 133.42911
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1973,
  //           energy_cons: 133.35136
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1974,
  //           energy_cons: 149.45265
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1975,
  //           energy_cons: 152.74605
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1976,
  //           energy_cons: 159.13867
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1977,
  //           energy_cons: 162.7448
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1978,
  //           energy_cons: 174.24585
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1979,
  //           energy_cons: 185.17953
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1980,
  //           energy_cons: 188.51971
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1981,
  //           energy_cons: 192.89537
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1982,
  //           energy_cons: 201.77173
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1983,
  //           energy_cons: 211.94589
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1984,
  //           energy_cons: 217.8419
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1985,
  //           energy_cons: 226.5836
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1986,
  //           energy_cons: 234.38069
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1987,
  //           energy_cons: 254.83751
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1988,
  //           energy_cons: 255.24583
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1989,
  //           energy_cons: 268.7424
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1990,
  //           energy_cons: 251.76855
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1991,
  //           energy_cons: 261.3405
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1992,
  //           energy_cons: 272.17053
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1993,
  //           energy_cons: 300.2536
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1994,
  //           energy_cons: 322.76627
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1995,
  //           energy_cons: 327.6844
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1996,
  //           energy_cons: 336.53815
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1997,
  //           energy_cons: 346.14435
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1998,
  //           energy_cons: 347.37457
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 1999,
  //           energy_cons: 322.2338
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 2000,
  //           energy_cons: 313.6767
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 2001,
  //           energy_cons: 308.84756
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 2002,
  //           energy_cons: 308.10696
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 2003,
  //           energy_cons: 319.00995
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 2004,
  //           energy_cons: 324.92654
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 2005,
  //           energy_cons: 325.93335
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 2006,
  //           energy_cons: 364.27026
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 2007,
  //           energy_cons: 365.44583
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 2008,
  //           energy_cons: 395.01224
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 2009,
  //           energy_cons: 387.16608
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 2010,
  //           energy_cons: 406.9504
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 2011,
  //           energy_cons: 420.82794
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 2012,
  //           energy_cons: 449.82245
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 2013,
  //           energy_cons: 452.36664
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 2014,
  //           energy_cons: 475.0708
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 2015,
  //           energy_cons: 480.4115
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 2016,
  //           energy_cons: 504.48978
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 2017,
  //           energy_cons: 509.89444
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 2018,
  //           energy_cons: 519.9112
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 2019,
  //           energy_cons: 535.98285
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 2020,
  //           energy_cons: 481.51395
  //         },
  //         {
  //           name: "Colombia",
  //           code: "COL",
  //           year: 2021,
  //           energy_cons: 534.309
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 1990,
  //           energy_cons: 100.45313
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 1991,
  //           energy_cons: 84.809425
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 1992,
  //           energy_cons: 80.52318
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 1993,
  //           energy_cons: 84.00661
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 1994,
  //           energy_cons: 84.86359
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 1995,
  //           energy_cons: 87.83747
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 1996,
  //           energy_cons: 94.24511
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 1997,
  //           energy_cons: 93.360695
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 1998,
  //           energy_cons: 98.720345
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 1999,
  //           energy_cons: 102.09152
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 2000,
  //           energy_cons: 96.55012
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 2001,
  //           energy_cons: 101.517715
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 2002,
  //           energy_cons: 101.62095
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 2003,
  //           energy_cons: 106.32018
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 2004,
  //           energy_cons: 110.54222
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 2005,
  //           energy_cons: 109.28634
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 2006,
  //           energy_cons: 107.94981
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 2007,
  //           energy_cons: 108.4557
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 2008,
  //           energy_cons: 107.86725
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 2009,
  //           energy_cons: 106.50575
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 2010,
  //           energy_cons: 108.262985
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 2011,
  //           energy_cons: 94.45342
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 2012,
  //           energy_cons: 87.59487
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 2013,
  //           energy_cons: 96.07085
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 2014,
  //           energy_cons: 96.012085
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 2015,
  //           energy_cons: 91.02197
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 2016,
  //           energy_cons: 94.732185
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 2017,
  //           energy_cons: 94.7834
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 2018,
  //           energy_cons: 98.16044
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 2019,
  //           energy_cons: 95.813194
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 2020,
  //           energy_cons: 91.37847
  //         },
  //         {
  //           name: "Croatia",
  //           code: "HRV",
  //           year: 2021,
  //           energy_cons: 99.400276
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1965,
  //           energy_cons: 4.6802506
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1966,
  //           energy_cons: 5.3386326
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1967,
  //           energy_cons: 5.787255
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1968,
  //           energy_cons: 6.427252
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1969,
  //           energy_cons: 7.5897937
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1970,
  //           energy_cons: 8.004829
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1971,
  //           energy_cons: 9.548514
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1972,
  //           energy_cons: 10.737024
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1973,
  //           energy_cons: 11.51917
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1974,
  //           energy_cons: 10.213084
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1975,
  //           energy_cons: 8.53023
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1976,
  //           energy_cons: 8.673059
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1977,
  //           energy_cons: 9.796984
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1978,
  //           energy_cons: 10.044485
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1979,
  //           energy_cons: 10.192833
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1980,
  //           energy_cons: 10.278665
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1981,
  //           energy_cons: 9.856194
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1982,
  //           energy_cons: 11.813792
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1983,
  //           energy_cons: 12.430679
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1984,
  //           energy_cons: 12.612489
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1985,
  //           energy_cons: 13.56538
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1986,
  //           energy_cons: 14.143438
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1987,
  //           energy_cons: 17.280825
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1988,
  //           energy_cons: 17.845005
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1989,
  //           energy_cons: 18.312033
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1990,
  //           energy_cons: 19.274536
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1991,
  //           energy_cons: 19.512157
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1992,
  //           energy_cons: 22.79668
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1993,
  //           energy_cons: 23.690178
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1994,
  //           energy_cons: 23.73236
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1995,
  //           energy_cons: 25.230673
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1996,
  //           energy_cons: 25.604818
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1997,
  //           energy_cons: 25.851624
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1998,
  //           energy_cons: 27.446606
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 1999,
  //           energy_cons: 28.880678
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 2000,
  //           energy_cons: 30.261105
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 2001,
  //           energy_cons: 30.609653
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 2002,
  //           energy_cons: 30.185936
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 2003,
  //           energy_cons: 32.0883
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 2004,
  //           energy_cons: 31.228363
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 2005,
  //           energy_cons: 34.992786
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 2006,
  //           energy_cons: 34.41193
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 2007,
  //           energy_cons: 34.986603
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 2008,
  //           energy_cons: 35.85529
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 2009,
  //           energy_cons: 35.003563
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 2010,
  //           energy_cons: 34.056034
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 2011,
  //           energy_cons: 33.72514
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 2012,
  //           energy_cons: 31.604967
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 2013,
  //           energy_cons: 28.278454
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 2014,
  //           energy_cons: 28.294395
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 2015,
  //           energy_cons: 29.184475
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 2016,
  //           energy_cons: 31.736938
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 2017,
  //           energy_cons: 32.595688
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 2018,
  //           energy_cons: 32.462143
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 2019,
  //           energy_cons: 32.4935
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 2020,
  //           energy_cons: 28.281317
  //         },
  //         {
  //           name: "Cyprus",
  //           code: "CYP",
  //           year: 2021,
  //           energy_cons: 29.798855
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1965,
  //           energy_cons: 468.77817
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1966,
  //           energy_cons: 472.28452
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1967,
  //           energy_cons: 464.94016
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1968,
  //           energy_cons: 484.89218
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1969,
  //           energy_cons: 505.533
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1970,
  //           energy_cons: 526.8715
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1971,
  //           energy_cons: 553.7012
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1972,
  //           energy_cons: 556.8454
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1973,
  //           energy_cons: 560.1646
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1974,
  //           energy_cons: 566.17145
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1975,
  //           energy_cons: 589.29956
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1976,
  //           energy_cons: 605.7287
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1977,
  //           energy_cons: 625.6485
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1978,
  //           energy_cons: 634.4026
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1979,
  //           energy_cons: 641.1094
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1980,
  //           energy_cons: 620.83575
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1981,
  //           energy_cons: 616.2253
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1982,
  //           energy_cons: 609.0046
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1983,
  //           energy_cons: 609.9775
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1984,
  //           energy_cons: 630.3021
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1985,
  //           energy_cons: 631.5098
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1986,
  //           energy_cons: 638.55334
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1987,
  //           energy_cons: 653.2551
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1988,
  //           energy_cons: 656.1136
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1989,
  //           energy_cons: 636.00006
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1990,
  //           energy_cons: 546.744
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1991,
  //           energy_cons: 497.63907
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1992,
  //           energy_cons: 482.9794
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1993,
  //           energy_cons: 479.1208
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1994,
  //           energy_cons: 466.4767
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1995,
  //           energy_cons: 486.21396
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1996,
  //           energy_cons: 502.92194
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1997,
  //           energy_cons: 482.31992
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1998,
  //           energy_cons: 468.2701
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 1999,
  //           energy_cons: 449.00696
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 2000,
  //           energy_cons: 474.47888
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 2001,
  //           energy_cons: 485.24454
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 2002,
  //           energy_cons: 486.72525
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 2003,
  //           energy_cons: 514.5483
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 2004,
  //           energy_cons: 527.4011
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 2005,
  //           energy_cons: 519.3657
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 2006,
  //           energy_cons: 529.4381
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 2007,
  //           energy_cons: 523.6515
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 2008,
  //           energy_cons: 513.6425
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 2009,
  //           energy_cons: 492.85428
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 2010,
  //           energy_cons: 513.5969
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 2011,
  //           energy_cons: 502.27646
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 2012,
  //           energy_cons: 499.75732
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 2013,
  //           energy_cons: 490.44128
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 2014,
  //           energy_cons: 479.91577
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 2015,
  //           energy_cons: 470.7039
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 2016,
  //           energy_cons: 464.3044
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 2017,
  //           energy_cons: 485.47775
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 2018,
  //           energy_cons: 483.93326
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 2019,
  //           energy_cons: 477.86542
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 2020,
  //           energy_cons: 442.0959
  //         },
  //         {
  //           name: "Czechia",
  //           code: "CZE",
  //           year: 2021,
  //           energy_cons: 466.01877
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1965,
  //           energy_cons: 166.20827
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1966,
  //           energy_cons: 189.0594
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1967,
  //           energy_cons: 190.12347
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1968,
  //           energy_cons: 198.66685
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1969,
  //           energy_cons: 228.0466
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1970,
  //           energy_cons: 242.98943
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1971,
  //           energy_cons: 229.63516
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1972,
  //           energy_cons: 242.34227
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1973,
  //           energy_cons: 234.46956
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1974,
  //           energy_cons: 213.3139
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1975,
  //           energy_cons: 210.23947
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1976,
  //           energy_cons: 231.44318
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1977,
  //           energy_cons: 236.18927
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1978,
  //           energy_cons: 239.61859
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1979,
  //           energy_cons: 239.13863
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1980,
  //           energy_cons: 232.9609
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1981,
  //           energy_cons: 209.24738
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1982,
  //           energy_cons: 199.99437
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1983,
  //           energy_cons: 190.11359
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1984,
  //           energy_cons: 193.2927
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1985,
  //           energy_cons: 217.81572
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1986,
  //           energy_cons: 222.6435
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1987,
  //           energy_cons: 214.64073
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1988,
  //           energy_cons: 212.30624
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1989,
  //           energy_cons: 195.81453
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1990,
  //           energy_cons: 201.96101
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1991,
  //           energy_cons: 232.85371
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1992,
  //           energy_cons: 218.1368
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1993,
  //           energy_cons: 231.30374
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1994,
  //           energy_cons: 248.05592
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1995,
  //           energy_cons: 243.61967
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1996,
  //           energy_cons: 289.88892
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1997,
  //           energy_cons: 262.99796
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1998,
  //           energy_cons: 253.69133
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 1999,
  //           energy_cons: 246.04889
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 2000,
  //           energy_cons: 236.5194
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 2001,
  //           energy_cons: 237.21649
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 2002,
  //           energy_cons: 236.75545
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 2003,
  //           energy_cons: 255.23256
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 2004,
  //           energy_cons: 241.65175
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 2005,
  //           energy_cons: 233.34503
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 2006,
  //           energy_cons: 256.83554
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 2007,
  //           energy_cons: 243.72012
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 2008,
  //           energy_cons: 234.5999
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 2009,
  //           energy_cons: 220.81181
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 2010,
  //           energy_cons: 232.6667
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 2011,
  //           energy_cons: 219.97386
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 2012,
  //           energy_cons: 203.9011
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 2013,
  //           energy_cons: 212.98372
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 2014,
  //           energy_cons: 206.29282
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 2015,
  //           energy_cons: 199.34435
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 2016,
  //           energy_cons: 201.16647
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 2017,
  //           energy_cons: 202.39526
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 2018,
  //           energy_cons: 199.43407
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 2019,
  //           energy_cons: 195.59312
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 2020,
  //           energy_cons: 174.23932
  //         },
  //         {
  //           name: "Denmark",
  //           code: "DNK",
  //           year: 2021,
  //           energy_cons: 186.5445
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1965,
  //           energy_cons: 8.656928
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1966,
  //           energy_cons: 9.112492
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1967,
  //           energy_cons: 9.85964
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1968,
  //           energy_cons: 11.642035
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1969,
  //           energy_cons: 12.369395
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1970,
  //           energy_cons: 14.7730255
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1971,
  //           energy_cons: 16.231356
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1972,
  //           energy_cons: 16.95922
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1973,
  //           energy_cons: 18.151958
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1974,
  //           energy_cons: 21.18778
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1975,
  //           energy_cons: 21.458302
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1976,
  //           energy_cons: 23.624739
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1977,
  //           energy_cons: 28.093426
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1978,
  //           energy_cons: 29.38396
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1979,
  //           energy_cons: 30.59804
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1980,
  //           energy_cons: 38.818127
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1981,
  //           energy_cons: 43.055058
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1982,
  //           energy_cons: 47.31239
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1983,
  //           energy_cons: 46.338787
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1984,
  //           energy_cons: 51.570744
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1985,
  //           energy_cons: 60.968285
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1986,
  //           energy_cons: 63.905838
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1987,
  //           energy_cons: 65.86541
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1988,
  //           energy_cons: 76.07125
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1989,
  //           energy_cons: 78.44754
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1990,
  //           energy_cons: 80.9821
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1991,
  //           energy_cons: 89.4387
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1992,
  //           energy_cons: 88.9794
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1993,
  //           energy_cons: 92.23142
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1994,
  //           energy_cons: 100.32273
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1995,
  //           energy_cons: 94.8182
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1996,
  //           energy_cons: 107.913506
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1997,
  //           energy_cons: 120.22123
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1998,
  //           energy_cons: 120.84405
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 1999,
  //           energy_cons: 110.230705
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 2000,
  //           energy_cons: 104.12882
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 2001,
  //           energy_cons: 105.48296
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 2002,
  //           energy_cons: 104.10937
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 2003,
  //           energy_cons: 106.60742
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 2004,
  //           energy_cons: 114.05594
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 2005,
  //           energy_cons: 120.72479
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 2006,
  //           energy_cons: 127.68568
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 2007,
  //           energy_cons: 134.25255
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 2008,
  //           energy_cons: 143.2851
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 2009,
  //           energy_cons: 139.80511
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 2010,
  //           energy_cons: 155.19423
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 2011,
  //           energy_cons: 164.6443
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 2012,
  //           energy_cons: 173.93343
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 2013,
  //           energy_cons: 179.50916
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 2014,
  //           energy_cons: 188.56316
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 2015,
  //           energy_cons: 188.04614
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 2016,
  //           energy_cons: 187.40384
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 2017,
  //           energy_cons: 194.56644
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 2018,
  //           energy_cons: 205.89235
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 2019,
  //           energy_cons: 211.30681
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 2020,
  //           energy_cons: 182.34662
  //         },
  //         {
  //           name: "Ecuador",
  //           code: "ECU",
  //           year: 2021,
  //           energy_cons: 211.73073
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1965,
  //           energy_cons: 91.67501
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1966,
  //           energy_cons: 96.462746
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1967,
  //           energy_cons: 82.58481
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1968,
  //           energy_cons: 89.117584
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1969,
  //           energy_cons: 73.37517
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1970,
  //           energy_cons: 91.43163
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1971,
  //           energy_cons: 93.99039
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1972,
  //           energy_cons: 104.29001
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1973,
  //           energy_cons: 98.57274
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1974,
  //           energy_cons: 112.037315
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1975,
  //           energy_cons: 124.28822
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1976,
  //           energy_cons: 148.62404
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1977,
  //           energy_cons: 161.27144
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1978,
  //           energy_cons: 170.3538
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1979,
  //           energy_cons: 186.08171
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1980,
  //           energy_cons: 211.66222
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1981,
  //           energy_cons: 241.09534
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1982,
  //           energy_cons: 268.99863
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1983,
  //           energy_cons: 290.81244
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1984,
  //           energy_cons: 317.11234
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1985,
  //           energy_cons: 328.84946
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1986,
  //           energy_cons: 336.31656
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1987,
  //           energy_cons: 356.63022
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1988,
  //           energy_cons: 361.8768
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1989,
  //           energy_cons: 381.46774
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1990,
  //           energy_cons: 391.32346
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1991,
  //           energy_cons: 396.43268
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1992,
  //           energy_cons: 392.62604
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1993,
  //           energy_cons: 392.91284
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1994,
  //           energy_cons: 413.2275
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1995,
  //           energy_cons: 437.82062
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1996,
  //           energy_cons: 461.2768
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1997,
  //           energy_cons: 480.5004
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1998,
  //           energy_cons: 500.30728
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 1999,
  //           energy_cons: 536.8888
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 2000,
  //           energy_cons: 568.53345
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 2001,
  //           energy_cons: 593.31384
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 2002,
  //           energy_cons: 610.24384
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 2003,
  //           energy_cons: 645.99164
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 2004,
  //           energy_cons: 682.05383
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 2005,
  //           energy_cons: 699.4166
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 2006,
  //           energy_cons: 736.64435
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 2007,
  //           energy_cons: 784.5794
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 2008,
  //           energy_cons: 831.83813
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 2009,
  //           energy_cons: 861.6713
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 2010,
  //           energy_cons: 895.11176
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 2011,
  //           energy_cons: 938.07916
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 2012,
  //           energy_cons: 975.2155
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 2013,
  //           energy_cons: 968.1441
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 2014,
  //           energy_cons: 955.8868
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 2015,
  //           energy_cons: 971.7204
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 2016,
  //           energy_cons: 1025.5828
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 2017,
  //           energy_cons: 1065.9023
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 2018,
  //           energy_cons: 1066.8585
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 2019,
  //           energy_cons: 1047.6891
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 2020,
  //           energy_cons: 983.6986
  //         },
  //         {
  //           name: "Egypt",
  //           code: "EGY",
  //           year: 2021,
  //           energy_cons: 1053.9027
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 1985,
  //           energy_cons: 118.452614
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 1986,
  //           energy_cons: 117.88285
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 1987,
  //           energy_cons: 119.66635
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 1988,
  //           energy_cons: 117.632866
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 1989,
  //           energy_cons: 121.22506
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 1990,
  //           energy_cons: 127.5705
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 1991,
  //           energy_cons: 116.732086
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 1992,
  //           energy_cons: 81.387985
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 1993,
  //           energy_cons: 67.58693
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 1994,
  //           energy_cons: 68.5388
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 1995,
  //           energy_cons: 62.165733
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 1996,
  //           energy_cons: 66.012535
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 1997,
  //           energy_cons: 65.02756
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 1998,
  //           energy_cons: 58.33113
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 1999,
  //           energy_cons: 53.73378
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 2000,
  //           energy_cons: 55.352886
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 2001,
  //           energy_cons: 57.806507
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 2002,
  //           energy_cons: 57.607048
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 2003,
  //           energy_cons: 62.824684
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 2004,
  //           energy_cons: 64.10093
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 2005,
  //           energy_cons: 64.467606
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 2006,
  //           energy_cons: 63.68264
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 2007,
  //           energy_cons: 73.75528
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 2008,
  //           energy_cons: 67.85399
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 2009,
  //           energy_cons: 58.717308
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 2010,
  //           energy_cons: 73.148674
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 2011,
  //           energy_cons: 72.96339
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 2012,
  //           energy_cons: 73.48276
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 2013,
  //           energy_cons: 77.368454
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 2014,
  //           energy_cons: 73.97814
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 2015,
  //           energy_cons: 68.41592
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 2016,
  //           energy_cons: 70.55708
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 2017,
  //           energy_cons: 78.259476
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 2018,
  //           energy_cons: 77.64769
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 2019,
  //           energy_cons: 62.55846
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 2020,
  //           energy_cons: 58.714207
  //         },
  //         {
  //           name: "Estonia",
  //           code: "EST",
  //           year: 2021,
  //           energy_cons: 65.87909
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1965,
  //           energy_cons: 115.4036
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1966,
  //           energy_cons: 131.36514
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1967,
  //           energy_cons: 138.25218
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1968,
  //           energy_cons: 150.03085
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1969,
  //           energy_cons: 164.92047
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1970,
  //           energy_cons: 181.70853
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1971,
  //           energy_cons: 186.58138
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1972,
  //           energy_cons: 196.71066
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1973,
  //           energy_cons: 216.77855
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1974,
  //           energy_cons: 207.93932
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1975,
  //           energy_cons: 211.2513
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1976,
  //           energy_cons: 224.03989
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1977,
  //           energy_cons: 236.9421
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1978,
  //           energy_cons: 245.9212
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1979,
  //           energy_cons: 265.8463
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1980,
  //           energy_cons: 264.66275
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1981,
  //           energy_cons: 267.23035
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1982,
  //           energy_cons: 263.89352
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1983,
  //           energy_cons: 261.3665
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1984,
  //           energy_cons: 272.34006
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1985,
  //           energy_cons: 285.74115
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1986,
  //           energy_cons: 289.0266
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1987,
  //           energy_cons: 304.29984
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1988,
  //           energy_cons: 302.30862
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1989,
  //           energy_cons: 303.61365
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1990,
  //           energy_cons: 322.87387
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1991,
  //           energy_cons: 330.37885
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1992,
  //           energy_cons: 329.3002
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1993,
  //           energy_cons: 332.1123
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1994,
  //           energy_cons: 348.65393
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1995,
  //           energy_cons: 332.32333
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1996,
  //           energy_cons: 347.89432
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1997,
  //           energy_cons: 352.01227
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1998,
  //           energy_cons: 364.5185
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 1999,
  //           energy_cons: 357.53506
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 2000,
  //           energy_cons: 359.42047
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 2001,
  //           energy_cons: 367.18942
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 2002,
  //           energy_cons: 369.08475
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 2003,
  //           energy_cons: 395.21817
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 2004,
  //           energy_cons: 393.55792
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 2005,
  //           energy_cons: 357.5271
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 2006,
  //           energy_cons: 383.8301
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 2007,
  //           energy_cons: 382.6907
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 2008,
  //           energy_cons: 369.0433
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 2009,
  //           energy_cons: 342.06558
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 2010,
  //           energy_cons: 371.81207
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 2011,
  //           energy_cons: 350.27
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 2012,
  //           energy_cons: 340.70154
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 2013,
  //           energy_cons: 342.16074
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 2014,
  //           energy_cons: 330.26746
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 2015,
  //           energy_cons: 329.24664
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 2016,
  //           energy_cons: 334.4674
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 2017,
  //           energy_cons: 327.81473
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 2018,
  //           energy_cons: 334.25378
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 2019,
  //           energy_cons: 327.36356
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 2020,
  //           energy_cons: 313.6534
  //         },
  //         {
  //           name: "Finland",
  //           code: "FIN",
  //           year: 2021,
  //           energy_cons: 321.86526
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1965,
  //           energy_cons: 1309.656
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1966,
  //           energy_cons: 1341.3168
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1967,
  //           energy_cons: 1427.175
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1968,
  //           energy_cons: 1506.5579
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1969,
  //           energy_cons: 1660.2914
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1970,
  //           energy_cons: 1803.2169
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1971,
  //           energy_cons: 1874.7922
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1972,
  //           energy_cons: 2004.0906
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1973,
  //           energy_cons: 2175.9456
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1974,
  //           energy_cons: 2137
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1975,
  //           energy_cons: 2013.2245
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1976,
  //           energy_cons: 2142.9983
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1977,
  //           energy_cons: 2171.511
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1978,
  //           energy_cons: 2268.6917
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1979,
  //           energy_cons: 2335.6416
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1980,
  //           energy_cons: 2307.1807
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1981,
  //           energy_cons: 2284.8538
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1982,
  //           energy_cons: 2200.5278
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1983,
  //           energy_cons: 2255.271
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1984,
  //           energy_cons: 2331.2126
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1985,
  //           energy_cons: 2408.1245
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1986,
  //           energy_cons: 2467.9397
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1987,
  //           energy_cons: 2513.7136
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1988,
  //           energy_cons: 2547.2817
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1989,
  //           energy_cons: 2578.5222
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1990,
  //           energy_cons: 2657.853
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1991,
  //           energy_cons: 2825.1626
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1992,
  //           energy_cons: 2848.8396
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1993,
  //           energy_cons: 2849.369
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1994,
  //           energy_cons: 2814.1702
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1995,
  //           energy_cons: 2880.9744
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1996,
  //           energy_cons: 2988.0015
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1997,
  //           energy_cons: 2947.4087
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1998,
  //           energy_cons: 3014.9285
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 1999,
  //           energy_cons: 3068.208
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 2000,
  //           energy_cons: 3107.3093
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 2001,
  //           energy_cons: 3145.4204
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 2002,
  //           energy_cons: 3113.1094
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 2003,
  //           energy_cons: 3145.1638
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 2004,
  //           energy_cons: 3170.9683
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 2005,
  //           energy_cons: 3152.4006
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 2006,
  //           energy_cons: 3127.1309
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 2007,
  //           energy_cons: 3072.3518
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 2008,
  //           energy_cons: 3081.9138
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 2009,
  //           energy_cons: 2909.9736
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 2010,
  //           energy_cons: 2997.7346
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 2011,
  //           energy_cons: 2881.3105
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 2012,
  //           energy_cons: 2883.0542
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 2013,
  //           energy_cons: 2913.8938
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 2014,
  //           energy_cons: 2791.6604
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 2015,
  //           energy_cons: 2808.1663
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 2016,
  //           energy_cons: 2760.945
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 2017,
  //           energy_cons: 2740.5354
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 2018,
  //           energy_cons: 2791.1248
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 2019,
  //           energy_cons: 2732.1338
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 2020,
  //           energy_cons: 2460.2937
  //         },
  //         {
  //           name: "France",
  //           code: "FRA",
  //           year: 2021,
  //           energy_cons: 2612.7915
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1965,
  //           energy_cons: 2969.2932
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1966,
  //           energy_cons: 2977.0012
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1967,
  //           energy_cons: 2969.4314
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1968,
  //           energy_cons: 3170.4126
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1969,
  //           energy_cons: 3419.778
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1970,
  //           energy_cons: 3611.0166
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1971,
  //           energy_cons: 3643.557
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1972,
  //           energy_cons: 3770.2227
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1973,
  //           energy_cons: 3987.3542
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1974,
  //           energy_cons: 3918.0276
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1975,
  //           energy_cons: 3764.5679
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1976,
  //           energy_cons: 4016.9045
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1977,
  //           energy_cons: 4007.1904
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1978,
  //           energy_cons: 4152.177
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1979,
  //           energy_cons: 4382.9087
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1980,
  //           energy_cons: 4239.2324
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1981,
  //           energy_cons: 4107.2334
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1982,
  //           energy_cons: 3962.4907
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1983,
  //           energy_cons: 4018.5115
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1984,
  //           energy_cons: 4166.991
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1985,
  //           energy_cons: 4290.3286
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1986,
  //           energy_cons: 4254.6763
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1987,
  //           energy_cons: 4291.178
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1988,
  //           energy_cons: 4305.7656
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1989,
  //           energy_cons: 4260.19
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1990,
  //           energy_cons: 4192.6416
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1991,
  //           energy_cons: 4090.6428
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1992,
  //           energy_cons: 4009.3376
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1993,
  //           energy_cons: 3991.5266
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1994,
  //           energy_cons: 3954.1719
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1995,
  //           energy_cons: 3974.795
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1996,
  //           energy_cons: 4105.8457
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1997,
  //           energy_cons: 4053.187
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1998,
  //           energy_cons: 4019.6316
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 1999,
  //           energy_cons: 3963.5603
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 2000,
  //           energy_cons: 3988.1792
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 2001,
  //           energy_cons: 4062.7993
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 2002,
  //           energy_cons: 4011.723
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 2003,
  //           energy_cons: 4010.471
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 2004,
  //           energy_cons: 4009.8933
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 2005,
  //           energy_cons: 3962.6313
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 2006,
  //           energy_cons: 4062.3843
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 2007,
  //           energy_cons: 3893.4248
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 2008,
  //           energy_cons: 3934.6614
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 2009,
  //           energy_cons: 3692.1802
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 2010,
  //           energy_cons: 3847.1501
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 2011,
  //           energy_cons: 3710.5864
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 2012,
  //           energy_cons: 3761.9148
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 2013,
  //           energy_cons: 3868.5193
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 2014,
  //           energy_cons: 3708.05
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 2015,
  //           energy_cons: 3778.4211
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 2016,
  //           energy_cons: 3840.5117
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 2017,
  //           energy_cons: 3890.3633
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 2018,
  //           energy_cons: 3792.8496
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 2019,
  //           energy_cons: 3695.202
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 2020,
  //           energy_cons: 3432.3726
  //         },
  //         {
  //           name: "Germany",
  //           code: "DEU",
  //           year: 2021,
  //           energy_cons: 3511.5872
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1965,
  //           energy_cons: 79.14619
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1966,
  //           energy_cons: 86.65006
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1967,
  //           energy_cons: 95.397736
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1968,
  //           energy_cons: 99.13831
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1969,
  //           energy_cons: 104.72187
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1970,
  //           energy_cons: 116.36268
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1971,
  //           energy_cons: 138.6327
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1972,
  //           energy_cons: 155.51648
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1973,
  //           energy_cons: 178.93362
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1974,
  //           energy_cons: 174.938
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1975,
  //           energy_cons: 198.28967
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1976,
  //           energy_cons: 219.07385
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1977,
  //           energy_cons: 227.19012
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1978,
  //           energy_cons: 231.18262
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1979,
  //           energy_cons: 203.03651
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1980,
  //           energy_cons: 201.10777
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1981,
  //           energy_cons: 196.51767
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1982,
  //           energy_cons: 199.18317
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1983,
  //           energy_cons: 200.29878
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1984,
  //           energy_cons: 209.13763
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1985,
  //           energy_cons: 220.91054
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1986,
  //           energy_cons: 221.38011
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1987,
  //           energy_cons: 242.08028
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1988,
  //           energy_cons: 255.60057
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1989,
  //           energy_cons: 277.0697
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1990,
  //           energy_cons: 287.31247
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1991,
  //           energy_cons: 291.4823
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1992,
  //           energy_cons: 296.6184
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1993,
  //           energy_cons: 300.53082
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1994,
  //           energy_cons: 305.6434
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1995,
  //           energy_cons: 316.79404
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1996,
  //           energy_cons: 324.7947
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1997,
  //           energy_cons: 334.0467
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1998,
  //           energy_cons: 354.78177
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 1999,
  //           energy_cons: 354.70486
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 2000,
  //           energy_cons: 373.0521
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 2001,
  //           energy_cons: 376.02524
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 2002,
  //           energy_cons: 376.37057
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 2003,
  //           energy_cons: 398.31607
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 2004,
  //           energy_cons: 398.22977
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 2005,
  //           energy_cons: 399.6051
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 2006,
  //           energy_cons: 411.30383
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 2007,
  //           energy_cons: 419.34802
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 2008,
  //           energy_cons: 407.0795
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 2009,
  //           energy_cons: 392.6778
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 2010,
  //           energy_cons: 374.25333
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 2011,
  //           energy_cons: 366.17325
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 2012,
  //           energy_cons: 344.63293
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 2013,
  //           energy_cons: 324.15366
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 2014,
  //           energy_cons: 304.7462
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 2015,
  //           energy_cons: 308.30948
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 2016,
  //           energy_cons: 302.52957
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 2017,
  //           energy_cons: 263.2285
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 2018,
  //           energy_cons: 318.80524
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 2019,
  //           energy_cons: 311.0483
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 2020,
  //           energy_cons: 276.8205
  //         },
  //         {
  //           name: "Greece",
  //           code: "GRC",
  //           year: 2021,
  //           energy_cons: 292.53506
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1965,
  //           energy_cons: 184.97542
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1966,
  //           energy_cons: 187.46286
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1967,
  //           energy_cons: 178.89243
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1968,
  //           energy_cons: 185.60588
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1969,
  //           energy_cons: 198.76245
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1970,
  //           energy_cons: 214.13968
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1971,
  //           energy_cons: 221.09702
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1972,
  //           energy_cons: 228.278
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1973,
  //           energy_cons: 247.19405
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1974,
  //           energy_cons: 254.76143
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1975,
  //           energy_cons: 269.71893
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1976,
  //           energy_cons: 288.15472
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1977,
  //           energy_cons: 302.97964
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1978,
  //           energy_cons: 324.03766
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1979,
  //           energy_cons: 320.8717
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1980,
  //           energy_cons: 321.83878
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1981,
  //           energy_cons: 318.58102
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1982,
  //           energy_cons: 319.99374
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1983,
  //           energy_cons: 314.48007
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1984,
  //           energy_cons: 323.01727
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1985,
  //           energy_cons: 333.3812
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1986,
  //           energy_cons: 331.8244
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1987,
  //           energy_cons: 346.65372
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1988,
  //           energy_cons: 338.65628
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1989,
  //           energy_cons: 329.90515
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1990,
  //           energy_cons: 323.15494
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1991,
  //           energy_cons: 301.7784
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1992,
  //           energy_cons: 289.518
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1993,
  //           energy_cons: 281.21964
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1994,
  //           energy_cons: 283.55118
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1995,
  //           energy_cons: 286.76703
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1996,
  //           energy_cons: 292.19284
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1997,
  //           energy_cons: 285.11905
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1998,
  //           energy_cons: 289.42123
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 1999,
  //           energy_cons: 288.64554
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 2000,
  //           energy_cons: 280.21057
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 2001,
  //           energy_cons: 287.0079
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 2002,
  //           energy_cons: 283.89465
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 2003,
  //           energy_cons: 284.38712
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 2004,
  //           energy_cons: 288.9156
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 2005,
  //           energy_cons: 308.78064
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 2006,
  //           energy_cons: 304.16034
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 2007,
  //           energy_cons: 300.15854
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 2008,
  //           energy_cons: 295.95618
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 2009,
  //           energy_cons: 272.59476
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 2010,
  //           energy_cons: 277.67993
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 2011,
  //           energy_cons: 269.2658
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 2012,
  //           energy_cons: 251.1719
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 2013,
  //           energy_cons: 238.08397
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 2014,
  //           energy_cons: 238.32555
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 2015,
  //           energy_cons: 251.08746
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 2016,
  //           energy_cons: 255.55595
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 2017,
  //           energy_cons: 269.39923
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 2018,
  //           energy_cons: 271.37778
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 2019,
  //           energy_cons: 274.98996
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 2020,
  //           energy_cons: 270.59744
  //         },
  //         {
  //           name: "Hungary",
  //           code: "HUN",
  //           year: 2021,
  //           energy_cons: 282.1924
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1965,
  //           energy_cons: 7.5830297
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1966,
  //           energy_cons: 7.9520016
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1967,
  //           energy_cons: 7.879483
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1968,
  //           energy_cons: 8.334446
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1969,
  //           energy_cons: 8.322165
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1970,
  //           energy_cons: 10.103885
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1971,
  //           energy_cons: 10.997424
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1972,
  //           energy_cons: 11.960912
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1973,
  //           energy_cons: 14.462597
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1974,
  //           energy_cons: 14.107852
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1975,
  //           energy_cons: 13.537112
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1976,
  //           energy_cons: 13.997224
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1977,
  //           energy_cons: 14.81264
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1978,
  //           energy_cons: 15.463569
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1979,
  //           energy_cons: 16.131617
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1980,
  //           energy_cons: 16.361628
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1981,
  //           energy_cons: 16.681036
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1982,
  //           energy_cons: 17.123405
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1983,
  //           energy_cons: 17.68429
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1984,
  //           energy_cons: 18.605944
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1985,
  //           energy_cons: 18.410109
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1986,
  //           energy_cons: 19.24943
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1987,
  //           energy_cons: 19.856398
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1988,
  //           energy_cons: 20.94677
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1989,
  //           energy_cons: 21.678116
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1990,
  //           energy_cons: 21.688084
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1991,
  //           energy_cons: 21.18768
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1992,
  //           energy_cons: 21.93417
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1993,
  //           energy_cons: 22.785404
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1994,
  //           energy_cons: 23.039999
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1995,
  //           energy_cons: 23.782099
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1996,
  //           energy_cons: 25.167963
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1997,
  //           energy_cons: 26.403275
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1998,
  //           energy_cons: 28.570063
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 1999,
  //           energy_cons: 31.300348
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 2000,
  //           energy_cons: 33.229618
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 2001,
  //           energy_cons: 33.59983
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 2002,
  //           energy_cons: 34.91136
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 2003,
  //           energy_cons: 35.08639
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 2004,
  //           energy_cons: 35.7808
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 2005,
  //           energy_cons: 35.904194
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 2006,
  //           energy_cons: 39.382256
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 2007,
  //           energy_cons: 45.020454
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 2008,
  //           energy_cons: 56.450768
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 2009,
  //           energy_cons: 56.355034
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 2010,
  //           energy_cons: 56.386024
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 2011,
  //           energy_cons: 56.377457
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 2012,
  //           energy_cons: 56.898125
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 2013,
  //           energy_cons: 58.716694
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 2014,
  //           energy_cons: 58.62973
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 2015,
  //           energy_cons: 61.20732
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 2016,
  //           energy_cons: 61.441673
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 2017,
  //           energy_cons: 64.2456
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 2018,
  //           energy_cons: 66.458565
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 2019,
  //           energy_cons: 63.32813
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 2020,
  //           energy_cons: 57.111042
  //         },
  //         {
  //           name: "Iceland",
  //           code: "ISL",
  //           year: 2021,
  //           energy_cons: 58.385235
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1965,
  //           energy_cons: 619.4514
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1966,
  //           energy_cons: 638.4138
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1967,
  //           energy_cons: 658.4335
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1968,
  //           energy_cons: 703.9852
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1969,
  //           energy_cons: 780.43604
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1970,
  //           energy_cons: 763.7408
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1971,
  //           energy_cons: 794.3863
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1972,
  //           energy_cons: 835.8586
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1973,
  //           energy_cons: 853.3237
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1974,
  //           energy_cons: 903.9876
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1975,
  //           energy_cons: 972.0112
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1976,
  //           energy_cons: 1019.4541
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1977,
  //           energy_cons: 1078.32
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1978,
  //           energy_cons: 1120.9728
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1979,
  //           energy_cons: 1182.959
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1980,
  //           energy_cons: 1218.599
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1981,
  //           energy_cons: 1349.2845
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1982,
  //           energy_cons: 1336.0491
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1983,
  //           energy_cons: 1405.0502
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1984,
  //           energy_cons: 1500.9186
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1985,
  //           energy_cons: 1584.2627
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1986,
  //           energy_cons: 1695.5906
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1987,
  //           energy_cons: 1802.8536
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1988,
  //           energy_cons: 1962.3015
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1989,
  //           energy_cons: 2143.4136
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1990,
  //           energy_cons: 2300.7012
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1991,
  //           energy_cons: 2427.663
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1992,
  //           energy_cons: 2552.7722
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1993,
  //           energy_cons: 2616.248
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1994,
  //           energy_cons: 2757.1213
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1995,
  //           energy_cons: 2963.118
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1996,
  //           energy_cons: 3081.6313
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1997,
  //           energy_cons: 3252.01
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1998,
  //           energy_cons: 3449.4966
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 1999,
  //           energy_cons: 3549.4888
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 2000,
  //           energy_cons: 3728.5144
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 2001,
  //           energy_cons: 3743.8525
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 2002,
  //           energy_cons: 3865.7512
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 2003,
  //           energy_cons: 4004.0781
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 2004,
  //           energy_cons: 4347.582
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 2005,
  //           energy_cons: 4603.6104
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 2006,
  //           energy_cons: 4849.72
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 2007,
  //           energy_cons: 5263.1113
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 2008,
  //           energy_cons: 5570.697
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 2009,
  //           energy_cons: 6003.236
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 2010,
  //           energy_cons: 6269.459
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 2011,
  //           energy_cons: 6650.7104
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 2012,
  //           energy_cons: 7048.088
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 2013,
  //           energy_cons: 7294.344
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 2014,
  //           energy_cons: 7799.773
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 2015,
  //           energy_cons: 8030.202
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 2016,
  //           energy_cons: 8378.88
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 2017,
  //           energy_cons: 8701.049
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 2018,
  //           energy_cons: 9260.351
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 2019,
  //           energy_cons: 9485.631
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 2020,
  //           energy_cons: 8941.913
  //         },
  //         {
  //           name: "India",
  //           code: "IND",
  //           year: 2021,
  //           energy_cons: 9841.214
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1965,
  //           energy_cons: 84.51602
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1966,
  //           energy_cons: 83.89609
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1967,
  //           energy_cons: 82.897255
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1968,
  //           energy_cons: 88.42529
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1969,
  //           energy_cons: 99.786095
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1970,
  //           energy_cons: 106.95583
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1971,
  //           energy_cons: 101.90203
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1972,
  //           energy_cons: 108.06705
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1973,
  //           energy_cons: 121.87374
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1974,
  //           energy_cons: 130.60435
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1975,
  //           energy_cons: 159.92432
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1976,
  //           energy_cons: 167.96707
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1977,
  //           energy_cons: 222.08504
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1978,
  //           energy_cons: 249.85503
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1979,
  //           energy_cons: 284.4632
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1980,
  //           energy_cons: 305.61102
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1981,
  //           energy_cons: 327.65338
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1982,
  //           energy_cons: 334.0774
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1983,
  //           energy_cons: 353.78964
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1984,
  //           energy_cons: 389.43604
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1985,
  //           energy_cons: 412.98465
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1986,
  //           energy_cons: 441.0255
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1987,
  //           energy_cons: 465.49518
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1988,
  //           energy_cons: 491.40314
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1989,
  //           energy_cons: 544.86926
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1990,
  //           energy_cons: 600.1789
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1991,
  //           energy_cons: 652.93835
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1992,
  //           energy_cons: 716.8603
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1993,
  //           energy_cons: 763.8427
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1994,
  //           energy_cons: 799.6467
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1995,
  //           energy_cons: 870.284
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1996,
  //           energy_cons: 933.1465
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1997,
  //           energy_cons: 1012.69525
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1998,
  //           energy_cons: 995.5688
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 1999,
  //           energy_cons: 1086.9857
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 2000,
  //           energy_cons: 1163.5768
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 2001,
  //           energy_cons: 1246.3198
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 2002,
  //           energy_cons: 1280.0542
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 2003,
  //           energy_cons: 1388.6609
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 2004,
  //           energy_cons: 1375.2766
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 2005,
  //           energy_cons: 1415.0558
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 2006,
  //           energy_cons: 1444.6648
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 2007,
  //           energy_cons: 1549.0225
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 2008,
  //           energy_cons: 1563.3329
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 2009,
  //           energy_cons: 1613.003
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 2010,
  //           energy_cons: 1768.507
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 2011,
  //           energy_cons: 1884.7456
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 2012,
  //           energy_cons: 1952.4012
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 2013,
  //           energy_cons: 1882.9996
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 2014,
  //           energy_cons: 1906.8468
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 2015,
  //           energy_cons: 1945.3312
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 2016,
  //           energy_cons: 1964.5734
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 2017,
  //           energy_cons: 2052.9526
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 2018,
  //           energy_cons: 2276.3518
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 2019,
  //           energy_cons: 2429.4468
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 2020,
  //           energy_cons: 2249.6296
  //         },
  //         {
  //           name: "Indonesia",
  //           code: "IDN",
  //           year: 2021,
  //           energy_cons: 2308.261
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1965,
  //           energy_cons: 97.29041
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1966,
  //           energy_cons: 106.03684
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1967,
  //           energy_cons: 116.65132
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1968,
  //           energy_cons: 128.25041
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1969,
  //           energy_cons: 140.75528
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1970,
  //           energy_cons: 166.0412
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1971,
  //           energy_cons: 181.8806
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1972,
  //           energy_cons: 206.21754
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1973,
  //           energy_cons: 246.47095
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1974,
  //           energy_cons: 279.46756
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1975,
  //           energy_cons: 325.6488
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1976,
  //           energy_cons: 366.46893
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1977,
  //           energy_cons: 414.9395
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1978,
  //           energy_cons: 405.6715
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1979,
  //           energy_cons: 437.9687
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1980,
  //           energy_cons: 406.0553
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1981,
  //           energy_cons: 407.5367
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1982,
  //           energy_cons: 459.94833
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1983,
  //           energy_cons: 546.1015
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1984,
  //           energy_cons: 590.16455
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1985,
  //           energy_cons: 643.94135
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1986,
  //           energy_cons: 603.27344
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1987,
  //           energy_cons: 646.7599
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1988,
  //           energy_cons: 659.5794
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1989,
  //           energy_cons: 720.9754
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1990,
  //           energy_cons: 811.283
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1991,
  //           energy_cons: 880.2287
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1992,
  //           energy_cons: 973.4238
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1993,
  //           energy_cons: 900.7482
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1994,
  //           energy_cons: 1008.74506
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1995,
  //           energy_cons: 1057.9441
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1996,
  //           energy_cons: 1150.8834
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1997,
  //           energy_cons: 1186.134
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1998,
  //           energy_cons: 1235.5067
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 1999,
  //           energy_cons: 1331.5682
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 2000,
  //           energy_cons: 1396.568
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 2001,
  //           energy_cons: 1492.1416
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 2002,
  //           energy_cons: 1626.3677
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 2003,
  //           energy_cons: 1656.1945
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 2004,
  //           energy_cons: 1831.9579
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 2005,
  //           energy_cons: 1940.2999
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 2006,
  //           energy_cons: 2120.2705
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 2007,
  //           energy_cons: 2253.9915
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 2008,
  //           energy_cons: 2322.665
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 2009,
  //           energy_cons: 2385.8237
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 2010,
  //           energy_cons: 2423.1843
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 2011,
  //           energy_cons: 2532.3804
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 2012,
  //           energy_cons: 2559.9185
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 2013,
  //           energy_cons: 2655.6091
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 2014,
  //           energy_cons: 2776.3455
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 2015,
  //           energy_cons: 2759.9985
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 2016,
  //           energy_cons: 2888.745
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 2017,
  //           energy_cons: 3009.5637
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 2018,
  //           energy_cons: 3107.9336
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 2019,
  //           energy_cons: 3262.4473
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 2020,
  //           energy_cons: 3339.772
  //         },
  //         {
  //           name: "Iran",
  //           code: "IRN",
  //           year: 2021,
  //           energy_cons: 3386.1921
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1965,
  //           energy_cons: 23.00489
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1966,
  //           energy_cons: 25.371931
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1967,
  //           energy_cons: 25.620562
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1968,
  //           energy_cons: 27.218597
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1969,
  //           energy_cons: 31.467367
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1970,
  //           energy_cons: 39.157288
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1971,
  //           energy_cons: 42.859035
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1972,
  //           energy_cons: 50.203167
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1973,
  //           energy_cons: 49.361454
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1974,
  //           energy_cons: 48.343945
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1975,
  //           energy_cons: 52.83918
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1976,
  //           energy_cons: 66.4417
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1977,
  //           energy_cons: 69.559135
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1978,
  //           energy_cons: 68.48839
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1979,
  //           energy_cons: 86.496506
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1980,
  //           energy_cons: 101.36128
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1981,
  //           energy_cons: 94.751366
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1982,
  //           energy_cons: 98.12972
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1983,
  //           energy_cons: 112.71636
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1984,
  //           energy_cons: 124.89339
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1985,
  //           energy_cons: 143.26233
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1986,
  //           energy_cons: 165.00845
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1987,
  //           energy_cons: 194.66452
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1988,
  //           energy_cons: 225.42177
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1989,
  //           energy_cons: 255.94246
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1990,
  //           energy_cons: 237.72375
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1991,
  //           energy_cons: 147.95554
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1992,
  //           energy_cons: 234.36699
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1993,
  //           energy_cons: 310.8687
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1994,
  //           energy_cons: 352.35858
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1995,
  //           energy_cons: 351.29645
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1996,
  //           energy_cons: 351.8173
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1997,
  //           energy_cons: 417.93503
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1998,
  //           energy_cons: 312.21008
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 1999,
  //           energy_cons: 223.91115
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 2000,
  //           energy_cons: 322.66235
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 2001,
  //           energy_cons: 360.44516
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 2002,
  //           energy_cons: 342.59573
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 2003,
  //           energy_cons: 304.07303
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 2004,
  //           energy_cons: 326.04388
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 2005,
  //           energy_cons: 308.3225
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 2006,
  //           energy_cons: 299.68204
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 2007,
  //           energy_cons: 302.17914
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 2008,
  //           energy_cons: 345.91293
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 2009,
  //           energy_cons: 339.51337
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 2010,
  //           energy_cons: 380.42465
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 2011,
  //           energy_cons: 391.37015
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 2012,
  //           energy_cons: 427.024
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 2013,
  //           energy_cons: 474.09857
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 2014,
  //           energy_cons: 450.68073
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 2015,
  //           energy_cons: 435.38483
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 2016,
  //           energy_cons: 499.76212
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 2017,
  //           energy_cons: 528.1663
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 2018,
  //           energy_cons: 636.5872
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 2019,
  //           energy_cons: 618.0856
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 2020,
  //           energy_cons: 551.7103
  //         },
  //         {
  //           name: "Iraq",
  //           code: "IRQ",
  //           year: 2021,
  //           energy_cons: 589.74854
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1965,
  //           energy_cons: 67.66312
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1966,
  //           energy_cons: 75.806435
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1967,
  //           energy_cons: 82.16955
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1968,
  //           energy_cons: 95.832275
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1969,
  //           energy_cons: 96.1496
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1970,
  //           energy_cons: 75.80377
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1971,
  //           energy_cons: 78.733536
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1972,
  //           energy_cons: 83.12677
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1973,
  //           energy_cons: 87.369446
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1974,
  //           energy_cons: 88.90049
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1975,
  //           energy_cons: 83.14532
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1976,
  //           energy_cons: 84.877235
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1977,
  //           energy_cons: 90.46338
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1978,
  //           energy_cons: 94.11173
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1979,
  //           energy_cons: 103.78635
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1980,
  //           energy_cons: 100.42442
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1981,
  //           energy_cons: 97.991
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1982,
  //           energy_cons: 97.28761
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1983,
  //           energy_cons: 95.87735
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1984,
  //           energy_cons: 94.85705
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1985,
  //           energy_cons: 99.53785
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1986,
  //           energy_cons: 107.50276
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1987,
  //           energy_cons: 108.71921
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1988,
  //           energy_cons: 108.19895
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1989,
  //           energy_cons: 111.47248
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1990,
  //           energy_cons: 117.0317
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1991,
  //           energy_cons: 121.23492
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1992,
  //           energy_cons: 122.08244
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1993,
  //           energy_cons: 124.733765
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1994,
  //           energy_cons: 129.68182
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1995,
  //           energy_cons: 132.19542
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1996,
  //           energy_cons: 139.80173
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1997,
  //           energy_cons: 145.92484
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1998,
  //           energy_cons: 157.00294
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 1999,
  //           energy_cons: 166.07474
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 2000,
  //           energy_cons: 172.73056
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 2001,
  //           energy_cons: 183.06667
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 2002,
  //           energy_cons: 181.8726
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 2003,
  //           energy_cons: 177.13438
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 2004,
  //           energy_cons: 179.51588
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 2005,
  //           energy_cons: 187.47118
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 2006,
  //           energy_cons: 191.44489
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 2007,
  //           energy_cons: 197.05217
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 2008,
  //           energy_cons: 196.28964
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 2009,
  //           energy_cons: 179.3973
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 2010,
  //           energy_cons: 179.11853
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 2011,
  //           energy_cons: 171.31065
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 2012,
  //           energy_cons: 168.24323
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 2013,
  //           energy_cons: 164.70993
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 2014,
  //           energy_cons: 164.12384
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 2015,
  //           energy_cons: 174.4816
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 2016,
  //           energy_cons: 181.67897
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 2017,
  //           energy_cons: 182.51239
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 2018,
  //           energy_cons: 186.5884
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 2019,
  //           energy_cons: 186.7078
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 2020,
  //           energy_cons: 174.9079
  //         },
  //         {
  //           name: "Ireland",
  //           code: "IRL",
  //           year: 2021,
  //           energy_cons: 174.2163
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1965,
  //           energy_cons: 41.013382
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1966,
  //           energy_cons: 42.64998
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1967,
  //           energy_cons: 51.74321
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1968,
  //           energy_cons: 52.673416
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1969,
  //           energy_cons: 59.531826
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1970,
  //           energy_cons: 63.54928
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1971,
  //           energy_cons: 72.11492
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1972,
  //           energy_cons: 68.31465
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1973,
  //           energy_cons: 72.821205
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1974,
  //           energy_cons: 73.12985
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1975,
  //           energy_cons: 75.1464
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1976,
  //           energy_cons: 77.041435
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1977,
  //           energy_cons: 80.89787
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1978,
  //           energy_cons: 88.33113
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1979,
  //           energy_cons: 91.25435
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1980,
  //           energy_cons: 92.57665
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1981,
  //           energy_cons: 94.15638
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1982,
  //           energy_cons: 101.747406
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1983,
  //           energy_cons: 101.81236
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1984,
  //           energy_cons: 105.946304
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1985,
  //           energy_cons: 98.25735
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1986,
  //           energy_cons: 103.35641
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1987,
  //           energy_cons: 110.83824
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1988,
  //           energy_cons: 118.79379
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1989,
  //           energy_cons: 124.27887
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1990,
  //           energy_cons: 129.13806
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1991,
  //           energy_cons: 131.27994
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1992,
  //           energy_cons: 153.19855
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1993,
  //           energy_cons: 166.36833
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1994,
  //           energy_cons: 173.57079
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1995,
  //           energy_cons: 195.21048
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1996,
  //           energy_cons: 202.2982
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1997,
  //           energy_cons: 221.2145
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1998,
  //           energy_cons: 232.79459
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 1999,
  //           energy_cons: 241.27261
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 2000,
  //           energy_cons: 227.37195
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 2001,
  //           energy_cons: 227.21329
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 2002,
  //           energy_cons: 231.78328
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 2003,
  //           energy_cons: 238.83669
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 2004,
  //           energy_cons: 243.58925
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 2005,
  //           energy_cons: 244.78761
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 2006,
  //           energy_cons: 244.07028
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 2007,
  //           energy_cons: 255.31548
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 2008,
  //           energy_cons: 262.74493
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 2009,
  //           energy_cons: 255.30804
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 2010,
  //           energy_cons: 265.50854
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 2011,
  //           energy_cons: 270.4796
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 2012,
  //           energy_cons: 282.93994
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 2013,
  //           energy_cons: 267.7891
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 2014,
  //           energy_cons: 261.3018
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 2015,
  //           energy_cons: 275.67944
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 2016,
  //           energy_cons: 281.31357
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 2017,
  //           energy_cons: 287.0112
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 2018,
  //           energy_cons: 291.7294
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 2019,
  //           energy_cons: 302.0523
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 2020,
  //           energy_cons: 285.73203
  //         },
  //         {
  //           name: "Israel",
  //           code: "ISR",
  //           year: 2021,
  //           energy_cons: 292.06387
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1965,
  //           energy_cons: 928.4623
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1966,
  //           energy_cons: 1008.3044
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1967,
  //           energy_cons: 1091.9742
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1968,
  //           energy_cons: 1179.9843
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1969,
  //           energy_cons: 1270.0332
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1970,
  //           energy_cons: 1402.1239
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1971,
  //           energy_cons: 1476.2557
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1972,
  //           energy_cons: 1548.1823
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1973,
  //           energy_cons: 1615.8225
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1974,
  //           energy_cons: 1615.3333
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1975,
  //           energy_cons: 1581.3531
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1976,
  //           energy_cons: 1668.9084
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1977,
  //           energy_cons: 1674.3582
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1978,
  //           energy_cons: 1715.5238
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1979,
  //           energy_cons: 1769.1648
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1980,
  //           energy_cons: 1723.7927
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1981,
  //           energy_cons: 1687.6261
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1982,
  //           energy_cons: 1654.0918
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1983,
  //           energy_cons: 1619.3403
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1984,
  //           energy_cons: 1644.5507
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1985,
  //           energy_cons: 1637.8606
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1986,
  //           energy_cons: 1682.5262
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1987,
  //           energy_cons: 1732.5101
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1988,
  //           energy_cons: 1775.1687
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1989,
  //           energy_cons: 1824.5133
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1990,
  //           energy_cons: 1854.886
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1991,
  //           energy_cons: 1913.1323
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1992,
  //           energy_cons: 1905.329
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1993,
  //           energy_cons: 1865.0537
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1994,
  //           energy_cons: 1860.836
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1995,
  //           energy_cons: 1936.3971
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1996,
  //           energy_cons: 1935.7981
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1997,
  //           energy_cons: 1969.2844
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1998,
  //           energy_cons: 2014.5813
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 1999,
  //           energy_cons: 2071.3828
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 2000,
  //           energy_cons: 2099.2852
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 2001,
  //           energy_cons: 2097.5369
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 2002,
  //           energy_cons: 2083.352
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 2003,
  //           energy_cons: 2149.7847
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 2004,
  //           energy_cons: 2197.5198
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 2005,
  //           energy_cons: 2200.2498
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 2006,
  //           energy_cons: 2190.0676
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 2007,
  //           energy_cons: 2148.2996
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 2008,
  //           energy_cons: 2111.905
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 2009,
  //           energy_cons: 1971.7054
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 2010,
  //           energy_cons: 2036.7328
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 2011,
  //           energy_cons: 1997.9125
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 2012,
  //           energy_cons: 1943.8774
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 2013,
  //           energy_cons: 1858.6002
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 2014,
  //           energy_cons: 1762.3201
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 2015,
  //           energy_cons: 1810.9089
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 2016,
  //           energy_cons: 1817.0454
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 2017,
  //           energy_cons: 1838.2611
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 2018,
  //           energy_cons: 1853.6401
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 2019,
  //           energy_cons: 1821.2183
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 2020,
  //           energy_cons: 1645.5117
  //         },
  //         {
  //           name: "Italy",
  //           code: "ITA",
  //           year: 2021,
  //           energy_cons: 1765.336
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1965,
  //           energy_cons: 1823.5638
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1966,
  //           energy_cons: 2013.8655
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1967,
  //           energy_cons: 2305.0354
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1968,
  //           energy_cons: 2569.7024
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1969,
  //           energy_cons: 2927.1223
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1970,
  //           energy_cons: 3271.379
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1971,
  //           energy_cons: 3483.683
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1972,
  //           energy_cons: 3649.3823
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1973,
  //           energy_cons: 4048.936
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1974,
  //           energy_cons: 4068.2695
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1975,
  //           energy_cons: 3886.6567
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1976,
  //           energy_cons: 4028.6243
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1977,
  //           energy_cons: 4056.8035
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1978,
  //           energy_cons: 4226.014
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1979,
  //           energy_cons: 4393.0073
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1980,
  //           energy_cons: 4264.411
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1981,
  //           energy_cons: 4204.616
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1982,
  //           energy_cons: 4043.9868
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1983,
  //           energy_cons: 4098.5693
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1984,
  //           energy_cons: 4446.286
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1985,
  //           energy_cons: 4481.0093
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1986,
  //           energy_cons: 4487.236
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1987,
  //           energy_cons: 4577.4736
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1988,
  //           energy_cons: 4867.986
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1989,
  //           energy_cons: 5035.3623
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1990,
  //           energy_cons: 5218.65
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1991,
  //           energy_cons: 5336.2437
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1992,
  //           energy_cons: 5391.9395
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1993,
  //           energy_cons: 5473.17
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1994,
  //           energy_cons: 5677.983
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1995,
  //           energy_cons: 5968.173
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1996,
  //           energy_cons: 6083.4697
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1997,
  //           energy_cons: 6200.573
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1998,
  //           energy_cons: 6076.8003
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 1999,
  //           energy_cons: 6176.304
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 2000,
  //           energy_cons: 6242.476
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 2001,
  //           energy_cons: 6183.3726
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 2002,
  //           energy_cons: 6192.4404
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 2003,
  //           energy_cons: 6170.212
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 2004,
  //           energy_cons: 6241.5093
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 2005,
  //           energy_cons: 6263.036
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 2006,
  //           energy_cons: 6248.704
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 2007,
  //           energy_cons: 6181.8066
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 2008,
  //           energy_cons: 6073.2383
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 2009,
  //           energy_cons: 5541.6133
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 2010,
  //           energy_cons: 5907.574
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 2011,
  //           energy_cons: 5595.5786
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 2012,
  //           energy_cons: 5552.538
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 2013,
  //           energy_cons: 5512.0854
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 2014,
  //           energy_cons: 5372.656
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 2015,
  //           energy_cons: 5296.5234
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 2016,
  //           energy_cons: 5228.6274
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 2017,
  //           energy_cons: 5292.3423
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 2018,
  //           energy_cons: 5264.1323
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 2019,
  //           energy_cons: 5140.9414
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 2020,
  //           energy_cons: 4758.867
  //         },
  //         {
  //           name: "Japan",
  //           code: "JPN",
  //           year: 2021,
  //           energy_cons: 4927.854
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 1985,
  //           energy_cons: 796.02734
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 1986,
  //           energy_cons: 814.25055
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 1987,
  //           energy_cons: 832.59485
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 1988,
  //           energy_cons: 862.9574
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 1989,
  //           energy_cons: 849.49603
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 1990,
  //           energy_cons: 859.4254
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 1991,
  //           energy_cons: 858.5374
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 1992,
  //           energy_cons: 847.4754
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 1993,
  //           energy_cons: 748.1537
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 1994,
  //           energy_cons: 666.42114
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 1995,
  //           energy_cons: 598.716
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 1996,
  //           energy_cons: 521.20215
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 1997,
  //           energy_cons: 459.5783
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 1998,
  //           energy_cons: 433.00296
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 1999,
  //           energy_cons: 406.96085
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 2000,
  //           energy_cons: 369.7474
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 2001,
  //           energy_cons: 416.19168
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 2002,
  //           energy_cons: 423.94363
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 2003,
  //           energy_cons: 464.69077
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 2004,
  //           energy_cons: 493.8026
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 2005,
  //           energy_cons: 507.509
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 2006,
  //           energy_cons: 546.1618
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 2007,
  //           energy_cons: 605.14886
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 2008,
  //           energy_cons: 638.1466
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 2009,
  //           energy_cons: 572.664
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 2010,
  //           energy_cons: 614.3876
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 2011,
  //           energy_cons: 697.2462
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 2012,
  //           energy_cons: 733.16974
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 2013,
  //           energy_cons: 736.4637
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 2014,
  //           energy_cons: 751.8685
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 2015,
  //           energy_cons: 713.38214
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 2016,
  //           energy_cons: 728.59064
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 2017,
  //           energy_cons: 766.60187
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 2018,
  //           energy_cons: 851.43896
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 2019,
  //           energy_cons: 843.3182
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 2020,
  //           energy_cons: 803.6175
  //         },
  //         {
  //           name: "Kazakhstan",
  //           code: "KAZ",
  //           year: 2021,
  //           energy_cons: 791.5689
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1965,
  //           energy_cons: 79.22156
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1966,
  //           energy_cons: 82.88144
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1967,
  //           energy_cons: 84.35843
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1968,
  //           energy_cons: 88.77665
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1969,
  //           energy_cons: 90.93682
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1970,
  //           energy_cons: 73.407524
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1971,
  //           energy_cons: 73.15679
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1972,
  //           energy_cons: 80.95828
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1973,
  //           energy_cons: 80.664154
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1974,
  //           energy_cons: 77.40107
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1975,
  //           energy_cons: 69.006836
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1976,
  //           energy_cons: 82.298454
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1977,
  //           energy_cons: 84.13927
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1978,
  //           energy_cons: 92.413055
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1979,
  //           energy_cons: 112.72723
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1980,
  //           energy_cons: 84.72407
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1981,
  //           energy_cons: 108.70876
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1982,
  //           energy_cons: 106.92248
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1983,
  //           energy_cons: 118.03348
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1984,
  //           energy_cons: 125.782196
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1985,
  //           energy_cons: 120.555084
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1986,
  //           energy_cons: 138.0484
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1987,
  //           energy_cons: 127.51621
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1988,
  //           energy_cons: 143.99365
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1989,
  //           energy_cons: 155.05028
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1990,
  //           energy_cons: 91.49267
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1991,
  //           energy_cons: 46.120697
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1992,
  //           energy_cons: 81.67526
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1993,
  //           energy_cons: 100.172905
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1994,
  //           energy_cons: 116.9345
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1995,
  //           energy_cons: 150.54976
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1996,
  //           energy_cons: 149.0201
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1997,
  //           energy_cons: 155.05125
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1998,
  //           energy_cons: 190.9837
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 1999,
  //           energy_cons: 198.26512
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 2000,
  //           energy_cons: 211.94315
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 2001,
  //           energy_cons: 214.30534
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 2002,
  //           energy_cons: 226.82956
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 2003,
  //           energy_cons: 271.0907
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 2004,
  //           energy_cons: 302.8387
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 2005,
  //           energy_cons: 334.09308
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 2006,
  //           energy_cons: 321.13065
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 2007,
  //           energy_cons: 311.9603
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 2008,
  //           energy_cons: 337.4702
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 2009,
  //           energy_cons: 349.38327
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 2010,
  //           energy_cons: 392.96445
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 2011,
  //           energy_cons: 403.56595
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 2012,
  //           energy_cons: 420.31418
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 2013,
  //           energy_cons: 429.56107
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 2014,
  //           energy_cons: 436.6215
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 2015,
  //           energy_cons: 453.70694
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 2016,
  //           energy_cons: 448.63754
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 2017,
  //           energy_cons: 457.2359
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 2018,
  //           energy_cons: 465.89578
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 2019,
  //           energy_cons: 479.5069
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 2020,
  //           energy_cons: 448.3697
  //         },
  //         {
  //           name: "Kuwait",
  //           code: "KWT",
  //           year: 2021,
  //           energy_cons: 483.02634
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 1985,
  //           energy_cons: 106.28864
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 1986,
  //           energy_cons: 98.76858
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 1987,
  //           energy_cons: 90.12286
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 1988,
  //           energy_cons: 85.056816
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 1989,
  //           energy_cons: 85.03688
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 1990,
  //           energy_cons: 86.46626
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 1991,
  //           energy_cons: 79.67954
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 1992,
  //           energy_cons: 57.034683
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 1993,
  //           energy_cons: 49.155556
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 1994,
  //           energy_cons: 47.623066
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 1995,
  //           energy_cons: 44.568214
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 1996,
  //           energy_cons: 41.46521
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 1997,
  //           energy_cons: 41.772293
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 1998,
  //           energy_cons: 45.462013
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 1999,
  //           energy_cons: 38.594276
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 2000,
  //           energy_cons: 37.75418
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 2001,
  //           energy_cons: 40.664444
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 2002,
  //           energy_cons: 41.022438
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 2003,
  //           energy_cons: 40.518818
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 2004,
  //           energy_cons: 45.555637
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 2005,
  //           energy_cons: 46.957714
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 2006,
  //           energy_cons: 44.543407
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 2007,
  //           energy_cons: 45.92616
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 2008,
  //           energy_cons: 46.235462
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 2009,
  //           energy_cons: 43.823296
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 2010,
  //           energy_cons: 49.674488
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 2011,
  //           energy_cons: 44.340313
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 2012,
  //           energy_cons: 45.927654
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 2013,
  //           energy_cons: 44.262756
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 2014,
  //           energy_cons: 40.745365
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 2015,
  //           energy_cons: 41.738686
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 2016,
  //           energy_cons: 44.50015
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 2017,
  //           energy_cons: 48.963078
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 2018,
  //           energy_cons: 43.561657
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 2019,
  //           energy_cons: 44.808014
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 2020,
  //           energy_cons: 40.694748
  //         },
  //         {
  //           name: "Latvia",
  //           code: "LVA",
  //           year: 2021,
  //           energy_cons: 42.211494
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 1985,
  //           energy_cons: 180.69313
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 1986,
  //           energy_cons: 166.729
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 1987,
  //           energy_cons: 174.66805
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 1988,
  //           energy_cons: 183.31961
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 1989,
  //           energy_cons: 198.57251
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 1990,
  //           energy_cons: 201.8876
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 1991,
  //           energy_cons: 213.42877
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 1992,
  //           energy_cons: 130.73293
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 1993,
  //           energy_cons: 102.23574
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 1994,
  //           energy_cons: 88.24206
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 1995,
  //           energy_cons: 98.59299
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 1996,
  //           energy_cons: 107.28731
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 1997,
  //           energy_cons: 98.9443
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 1998,
  //           energy_cons: 106.15751
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 1999,
  //           energy_cons: 88.27573
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 2000,
  //           energy_cons: 78.03437
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 2001,
  //           energy_cons: 91.24377
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 2002,
  //           energy_cons: 97.37914
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 2003,
  //           energy_cons: 102.1121
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 2004,
  //           energy_cons: 102.97575
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 2005,
  //           energy_cons: 93.480354
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 2006,
  //           energy_cons: 89.52265
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 2007,
  //           energy_cons: 97.96054
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 2008,
  //           energy_cons: 97.102715
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 2009,
  //           energy_cons: 89.227875
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 2010,
  //           energy_cons: 65.72545
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 2011,
  //           energy_cons: 68.24482
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 2012,
  //           energy_cons: 68.55311
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 2013,
  //           energy_cons: 63.350864
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 2014,
  //           energy_cons: 61.13551
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 2015,
  //           energy_cons: 63.87564
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 2016,
  //           energy_cons: 65.05722
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 2017,
  //           energy_cons: 68.72217
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 2018,
  //           energy_cons: 70.46074
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 2019,
  //           energy_cons: 70.17
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 2020,
  //           energy_cons: 69.978645
  //         },
  //         {
  //           name: "Lithuania",
  //           code: "LTU",
  //           year: 2021,
  //           energy_cons: 70.18722
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1965,
  //           energy_cons: 41.804054
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1966,
  //           energy_cons: 40.057217
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1967,
  //           energy_cons: 39.45144
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1968,
  //           energy_cons: 42.668827
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1969,
  //           energy_cons: 45.919926
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1970,
  //           energy_cons: 47.681232
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1971,
  //           energy_cons: 45.844536
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1972,
  //           energy_cons: 47.274708
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1973,
  //           energy_cons: 50.1158
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1974,
  //           energy_cons: 50.89393
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1975,
  //           energy_cons: 42.276123
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1976,
  //           energy_cons: 42.342865
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1977,
  //           energy_cons: 39.522022
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1978,
  //           energy_cons: 41.117573
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1979,
  //           energy_cons: 42.264366
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1980,
  //           energy_cons: 38.96121
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1981,
  //           energy_cons: 33.322643
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1982,
  //           energy_cons: 31.220354
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1983,
  //           energy_cons: 29.184877
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1984,
  //           energy_cons: 31.444029
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1985,
  //           energy_cons: 32.288113
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1986,
  //           energy_cons: 31.56412
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1987,
  //           energy_cons: 29.831415
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1988,
  //           energy_cons: 30.571896
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1989,
  //           energy_cons: 35.116985
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1990,
  //           energy_cons: 37.151257
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1991,
  //           energy_cons: 39.928738
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1992,
  //           energy_cons: 40.042828
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1993,
  //           energy_cons: 40.56885
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1994,
  //           energy_cons: 39.01029
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1995,
  //           energy_cons: 33.934605
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1996,
  //           energy_cons: 34.89928
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1997,
  //           energy_cons: 34.15858
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1998,
  //           energy_cons: 32.987743
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 1999,
  //           energy_cons: 34.859653
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 2000,
  //           energy_cons: 37.2042
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 2001,
  //           energy_cons: 39.86669
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 2002,
  //           energy_cons: 43.58215
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 2003,
  //           energy_cons: 45.7039
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 2004,
  //           energy_cons: 51.77978
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 2005,
  //           energy_cons: 52.55297
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 2006,
  //           energy_cons: 51.626637
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 2007,
  //           energy_cons: 50.125652
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 2008,
  //           energy_cons: 49.76075
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 2009,
  //           energy_cons: 47.592957
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 2010,
  //           energy_cons: 50.115738
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 2011,
  //           energy_cons: 48.821114
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 2012,
  //           energy_cons: 47.95294
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 2013,
  //           energy_cons: 45.692364
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 2014,
  //           energy_cons: 44.27421
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 2015,
  //           energy_cons: 43.034466
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 2016,
  //           energy_cons: 42.459232
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 2017,
  //           energy_cons: 44.354664
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 2018,
  //           energy_cons: 46.43433
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 2019,
  //           energy_cons: 47.28681
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 2020,
  //           energy_cons: 40.496933
  //         },
  //         {
  //           name: "Luxembourg",
  //           code: "LUX",
  //           year: 2021,
  //           energy_cons: 42.087273
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1965,
  //           energy_cons: 33.086407
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1966,
  //           energy_cons: 38.272495
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1967,
  //           energy_cons: 41.10208
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1968,
  //           energy_cons: 42.502724
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1969,
  //           energy_cons: 46.634598
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1970,
  //           energy_cons: 44.26303
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1971,
  //           energy_cons: 49.442223
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1972,
  //           energy_cons: 55.07215
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1973,
  //           energy_cons: 58.027016
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1974,
  //           energy_cons: 58.828335
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1975,
  //           energy_cons: 60.67413
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1976,
  //           energy_cons: 67.74989
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1977,
  //           energy_cons: 79.25002
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1978,
  //           energy_cons: 105.26914
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1979,
  //           energy_cons: 121.070114
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1980,
  //           energy_cons: 126.611565
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1981,
  //           energy_cons: 130.89142
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1982,
  //           energy_cons: 140.16081
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1983,
  //           energy_cons: 160.96187
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1984,
  //           energy_cons: 173.47165
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1985,
  //           energy_cons: 171.88377
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1986,
  //           energy_cons: 188.65878
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1987,
  //           energy_cons: 194.5292
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1988,
  //           energy_cons: 204.60263
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1989,
  //           energy_cons: 228.99234
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1990,
  //           energy_cons: 240.98552
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1991,
  //           energy_cons: 301.8661
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1992,
  //           energy_cons: 340.55438
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1993,
  //           energy_cons: 342.51465
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1994,
  //           energy_cons: 363.73718
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1995,
  //           energy_cons: 397.95117
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1996,
  //           energy_cons: 444.2731
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1997,
  //           energy_cons: 515.45135
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1998,
  //           energy_cons: 495.44116
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 1999,
  //           energy_cons: 529.4285
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 2000,
  //           energy_cons: 611.29504
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 2001,
  //           energy_cons: 625.90314
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 2002,
  //           energy_cons: 659.1371
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 2003,
  //           energy_cons: 714.1439
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 2004,
  //           energy_cons: 771.61487
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 2005,
  //           energy_cons: 835.09125
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 2006,
  //           energy_cons: 844.77924
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 2007,
  //           energy_cons: 901.09186
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 2008,
  //           energy_cons: 932.7853
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 2009,
  //           energy_cons: 903.26276
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 2010,
  //           energy_cons: 932.609
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 2011,
  //           energy_cons: 948.8749
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 2012,
  //           energy_cons: 1038.0803
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 2013,
  //           energy_cons: 1086.3978
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 2014,
  //           energy_cons: 1097.2881
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 2015,
  //           energy_cons: 1114.3468
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 2016,
  //           energy_cons: 1172.8071
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 2017,
  //           energy_cons: 1188.3514
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 2018,
  //           energy_cons: 1209.4753
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 2019,
  //           energy_cons: 1241.5334
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 2020,
  //           energy_cons: 1139.4768
  //         },
  //         {
  //           name: "Malaysia",
  //           code: "MYS",
  //           year: 2021,
  //           energy_cons: 1164.1376
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1965,
  //           energy_cons: 293.32523
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1966,
  //           energy_cons: 310.58316
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1967,
  //           energy_cons: 316.54944
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1968,
  //           energy_cons: 344.76465
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1969,
  //           energy_cons: 378.42734
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1970,
  //           energy_cons: 404.03186
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1971,
  //           energy_cons: 424.82913
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1972,
  //           energy_cons: 469.57944
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1973,
  //           energy_cons: 506.46976
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1974,
  //           energy_cons: 557.68085
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1975,
  //           energy_cons: 595.5826
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1976,
  //           energy_cons: 633.882
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1977,
  //           energy_cons: 668.705
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1978,
  //           energy_cons: 752.5098
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1979,
  //           energy_cons: 832.0409
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1980,
  //           energy_cons: 906.3236
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1981,
  //           energy_cons: 1002.08154
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1982,
  //           energy_cons: 1044.3143
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1983,
  //           energy_cons: 1032.6464
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1984,
  //           energy_cons: 1080.8262
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1985,
  //           energy_cons: 1134.3961
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1986,
  //           energy_cons: 1100.6744
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1987,
  //           energy_cons: 1136.8993
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1988,
  //           energy_cons: 1145.4648
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1989,
  //           energy_cons: 1209.8295
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1990,
  //           energy_cons: 1272.6863
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1991,
  //           energy_cons: 1321.859
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1992,
  //           energy_cons: 1345.4799
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1993,
  //           energy_cons: 1352.3633
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1994,
  //           energy_cons: 1428.6938
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1995,
  //           energy_cons: 1407.8188
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1996,
  //           energy_cons: 1452.4899
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1997,
  //           energy_cons: 1476.5502
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1998,
  //           energy_cons: 1541.7102
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 1999,
  //           energy_cons: 1562.5312
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 2000,
  //           energy_cons: 1636.052
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 2001,
  //           energy_cons: 1615.3925
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 2002,
  //           energy_cons: 1666.1063
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 2003,
  //           energy_cons: 1679.1625
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 2004,
  //           energy_cons: 1770.23
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 2005,
  //           energy_cons: 1884.1526
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 2006,
  //           energy_cons: 1943.9862
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 2007,
  //           energy_cons: 1953.5824
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 2008,
  //           energy_cons: 1996.4237
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 2009,
  //           energy_cons: 1978.5386
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 2010,
  //           energy_cons: 2037.8503
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 2011,
  //           energy_cons: 2135.5176
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 2012,
  //           energy_cons: 2147.6855
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 2013,
  //           energy_cons: 2156.5764
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 2014,
  //           energy_cons: 2147.0728
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 2015,
  //           energy_cons: 2144.2676
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 2016,
  //           energy_cons: 2171.807
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 2017,
  //           energy_cons: 2203.3796
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 2018,
  //           energy_cons: 2193.7888
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 2019,
  //           energy_cons: 2105.911
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 2020,
  //           energy_cons: 1786.1702
  //         },
  //         {
  //           name: "Mexico",
  //           code: "MEX",
  //           year: 2021,
  //           energy_cons: 1885.833
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1965,
  //           energy_cons: 17.732784
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1966,
  //           energy_cons: 23.356989
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1967,
  //           energy_cons: 24.611572
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1968,
  //           energy_cons: 26.424131
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1969,
  //           energy_cons: 28.980839
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1970,
  //           energy_cons: 30.346912
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1971,
  //           energy_cons: 32.27997
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1972,
  //           energy_cons: 34.890007
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1973,
  //           energy_cons: 38.7562
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1974,
  //           energy_cons: 41.430645
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1975,
  //           energy_cons: 42.110126
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1976,
  //           energy_cons: 45.639267
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1977,
  //           energy_cons: 51.190517
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1978,
  //           energy_cons: 54.337246
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1979,
  //           energy_cons: 60.602814
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1980,
  //           energy_cons: 60.775513
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1981,
  //           energy_cons: 58.95026
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1982,
  //           energy_cons: 60.74948
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1983,
  //           energy_cons: 62.371143
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1984,
  //           energy_cons: 63.20393
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1985,
  //           energy_cons: 65.30277
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1986,
  //           energy_cons: 67.53515
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1987,
  //           energy_cons: 69.565056
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1988,
  //           energy_cons: 73.48684
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1989,
  //           energy_cons: 80.84707
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1990,
  //           energy_cons: 82.75576
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1991,
  //           energy_cons: 83.80381
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1992,
  //           energy_cons: 93.77931
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1993,
  //           energy_cons: 94.76589
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1994,
  //           energy_cons: 104.45443
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1995,
  //           energy_cons: 102.451836
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1996,
  //           energy_cons: 107.11356
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1997,
  //           energy_cons: 111.35379
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1998,
  //           energy_cons: 114.2117
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 1999,
  //           energy_cons: 118.49202
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 2000,
  //           energy_cons: 117.46337
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 2001,
  //           energy_cons: 126.90545
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 2002,
  //           energy_cons: 130.06134
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 2003,
  //           energy_cons: 130.4208
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 2004,
  //           energy_cons: 148.52536
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 2005,
  //           energy_cons: 161.08754
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 2006,
  //           energy_cons: 164.35902
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 2007,
  //           energy_cons: 162.88348
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 2008,
  //           energy_cons: 179.79024
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 2009,
  //           energy_cons: 175.41556
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 2010,
  //           energy_cons: 194.55229
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 2011,
  //           energy_cons: 204.23598
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 2012,
  //           energy_cons: 207.73775
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 2013,
  //           energy_cons: 213.31587
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 2014,
  //           energy_cons: 216.38223
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 2015,
  //           energy_cons: 220.38638
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 2016,
  //           energy_cons: 222.8303
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 2017,
  //           energy_cons: 233.31287
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 2018,
  //           energy_cons: 241.39522
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 2019,
  //           energy_cons: 263.47104
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 2020,
  //           energy_cons: 240.1092
  //         },
  //         {
  //           name: "Morocco",
  //           code: "MAR",
  //           year: 2021,
  //           energy_cons: 265.40326
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1965,
  //           energy_cons: 413.96008
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1966,
  //           energy_cons: 443.37744
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1967,
  //           energy_cons: 468.80002
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1968,
  //           energy_cons: 524.3931
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1969,
  //           energy_cons: 584.78674
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1970,
  //           energy_cons: 659.7977
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1971,
  //           energy_cons: 695.7717
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1972,
  //           energy_cons: 808.1382
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1973,
  //           energy_cons: 859.68176
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1974,
  //           energy_cons: 815.95734
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1975,
  //           energy_cons: 822.84546
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1976,
  //           energy_cons: 897.42334
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1977,
  //           energy_cons: 881.3143
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1978,
  //           energy_cons: 899.1806
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1979,
  //           energy_cons: 928.8725
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1980,
  //           energy_cons: 872.1952
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1981,
  //           energy_cons: 827.1
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1982,
  //           energy_cons: 764.4159
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1983,
  //           energy_cons: 768.06683
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1984,
  //           energy_cons: 797.36896
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1985,
  //           energy_cons: 822.8482
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1986,
  //           energy_cons: 863.6402
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1987,
  //           energy_cons: 881.43427
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1988,
  //           energy_cons: 884.37036
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1989,
  //           energy_cons: 888.4578
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1990,
  //           energy_cons: 910.73474
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1991,
  //           energy_cons: 928.0633
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1992,
  //           energy_cons: 939.11743
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1993,
  //           energy_cons: 946.9662
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1994,
  //           energy_cons: 936.80884
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1995,
  //           energy_cons: 974.96185
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1996,
  //           energy_cons: 1017.11066
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1997,
  //           energy_cons: 998.8505
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1998,
  //           energy_cons: 1005.94214
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 1999,
  //           energy_cons: 993.77686
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 2000,
  //           energy_cons: 1006.81946
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 2001,
  //           energy_cons: 1045.5573
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 2002,
  //           energy_cons: 1046.0612
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 2003,
  //           energy_cons: 1053.0762
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 2004,
  //           energy_cons: 1088.7443
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 2005,
  //           energy_cons: 1112.242
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 2006,
  //           energy_cons: 1089.5758
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 2007,
  //           energy_cons: 1107.524
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 2008,
  //           energy_cons: 1094.3888
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 2009,
  //           energy_cons: 1079.291
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 2010,
  //           energy_cons: 1142.5782
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 2011,
  //           energy_cons: 1095.0137
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 2012,
  //           energy_cons: 1059.1238
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 2013,
  //           energy_cons: 1027.4209
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 2014,
  //           energy_cons: 969.6319
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 2015,
  //           energy_cons: 983.5034
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 2016,
  //           energy_cons: 1001.68396
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 2017,
  //           energy_cons: 986.60895
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 2018,
  //           energy_cons: 986.38153
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 2019,
  //           energy_cons: 985.545
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 2020,
  //           energy_cons: 940.1755
  //         },
  //         {
  //           name: "Netherlands",
  //           code: "NLD",
  //           year: 2021,
  //           energy_cons: 965.15106
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1965,
  //           energy_cons: 85.217926
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1966,
  //           energy_cons: 90.54921
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1967,
  //           energy_cons: 91.340935
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1968,
  //           energy_cons: 93.47527
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1969,
  //           energy_cons: 95.07715
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1970,
  //           energy_cons: 105.80865
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1971,
  //           energy_cons: 110.80132
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1972,
  //           energy_cons: 118.23857
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1973,
  //           energy_cons: 122.97619
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1974,
  //           energy_cons: 125.23529
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1975,
  //           energy_cons: 127.2176
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1976,
  //           energy_cons: 131.36148
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1977,
  //           energy_cons: 133.70573
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1978,
  //           energy_cons: 131.98204
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1979,
  //           energy_cons: 133.87413
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1980,
  //           energy_cons: 134.62161
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1981,
  //           energy_cons: 134.93895
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1982,
  //           energy_cons: 139.25404
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1983,
  //           energy_cons: 144.75362
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1984,
  //           energy_cons: 152.50063
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1985,
  //           energy_cons: 154.19765
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1986,
  //           energy_cons: 166.3199
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1987,
  //           energy_cons: 167.84251
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1988,
  //           energy_cons: 175.78394
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1989,
  //           energy_cons: 157.62564
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1990,
  //           energy_cons: 186.30345
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1991,
  //           energy_cons: 189.94023
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1992,
  //           energy_cons: 190.25949
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1993,
  //           energy_cons: 195.8203
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1994,
  //           energy_cons: 207.09973
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1995,
  //           energy_cons: 214.50853
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1996,
  //           energy_cons: 217.76399
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1997,
  //           energy_cons: 218.34146
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1998,
  //           energy_cons: 218.2875
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 1999,
  //           energy_cons: 219.55342
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 2000,
  //           energy_cons: 229.61891
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 2001,
  //           energy_cons: 227.06152
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 2002,
  //           energy_cons: 235.45807
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 2003,
  //           energy_cons: 227.83017
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 2004,
  //           energy_cons: 235.99295
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 2005,
  //           energy_cons: 228.68762
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 2006,
  //           energy_cons: 230.66959
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 2007,
  //           energy_cons: 229.86813
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 2008,
  //           energy_cons: 230.63165
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 2009,
  //           energy_cons: 229.85397
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 2010,
  //           energy_cons: 234.91394
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 2011,
  //           energy_cons: 236.38501
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 2012,
  //           energy_cons: 237.96341
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 2013,
  //           energy_cons: 239.87975
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 2014,
  //           energy_cons: 250.76727
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 2015,
  //           energy_cons: 252.20494
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 2016,
  //           energy_cons: 254.7441
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 2017,
  //           energy_cons: 259.41656
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 2018,
  //           energy_cons: 257.5565
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 2019,
  //           energy_cons: 263.8421
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 2020,
  //           energy_cons: 239.22797
  //         },
  //         {
  //           name: "New Zealand",
  //           code: "NZL",
  //           year: 2021,
  //           energy_cons: 233.72845
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 1990,
  //           energy_cons: 29.659569
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 1991,
  //           energy_cons: 29.447426
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 1992,
  //           energy_cons: 30.236948
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 1993,
  //           energy_cons: 30.27947
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 1994,
  //           energy_cons: 28.441813
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 1995,
  //           energy_cons: 28.651136
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 1996,
  //           energy_cons: 33.28032
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 1997,
  //           energy_cons: 30.01362
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 1998,
  //           energy_cons: 33.92399
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 1999,
  //           energy_cons: 32.503963
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 2000,
  //           energy_cons: 30.847715
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 2001,
  //           energy_cons: 29.024567
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 2002,
  //           energy_cons: 28.361496
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 2003,
  //           energy_cons: 31.975605
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 2004,
  //           energy_cons: 31.577074
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 2005,
  //           energy_cons: 32.546844
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 2006,
  //           energy_cons: 33.08933
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 2007,
  //           energy_cons: 32.840622
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 2008,
  //           energy_cons: 31.731112
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 2009,
  //           energy_cons: 31.26014
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 2010,
  //           energy_cons: 33.890694
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 2011,
  //           energy_cons: 33.80759
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 2012,
  //           energy_cons: 31.370337
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 2013,
  //           energy_cons: 30.123129
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 2014,
  //           energy_cons: 27.964352
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 2015,
  //           energy_cons: 29.483152
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 2016,
  //           energy_cons: 30.58978
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 2017,
  //           energy_cons: 29.433798
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 2018,
  //           energy_cons: 29.402323
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 2019,
  //           energy_cons: 31.055525
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 2020,
  //           energy_cons: 27.046328
  //         },
  //         {
  //           name: "North Macedonia",
  //           code: "MKD",
  //           year: 2021,
  //           energy_cons: 29.054539
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1965,
  //           energy_cons: 215.42297
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1966,
  //           energy_cons: 220.39368
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1967,
  //           energy_cons: 236.68207
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1968,
  //           energy_cons: 265.16656
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1969,
  //           energy_cons: 265.5665
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1970,
  //           energy_cons: 277.90167
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1971,
  //           energy_cons: 292.36362
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1972,
  //           energy_cons: 310.05338
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1973,
  //           energy_cons: 328.54492
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1974,
  //           energy_cons: 331.55154
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1975,
  //           energy_cons: 336.39883
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1976,
  //           energy_cons: 359.81378
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1977,
  //           energy_cons: 331.37222
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1978,
  //           energy_cons: 371.84988
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1979,
  //           energy_cons: 398.2091
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1980,
  //           energy_cons: 378.90176
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1981,
  //           energy_cons: 400.17148
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1982,
  //           energy_cons: 395.4774
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1983,
  //           energy_cons: 434.764
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1984,
  //           energy_cons: 440.21674
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1985,
  //           energy_cons: 435.44504
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1986,
  //           energy_cons: 424.8429
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1987,
  //           energy_cons: 446.35062
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1988,
  //           energy_cons: 460.09702
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1989,
  //           energy_cons: 490.18777
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1990,
  //           energy_cons: 495.3977
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1991,
  //           energy_cons: 456.79172
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1992,
  //           energy_cons: 481.06427
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1993,
  //           energy_cons: 496.43088
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1994,
  //           energy_cons: 479.4754
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1995,
  //           energy_cons: 508.79065
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1996,
  //           energy_cons: 466.7105
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1997,
  //           energy_cons: 490.6514
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1998,
  //           energy_cons: 510.26584
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 1999,
  //           energy_cons: 523.7981
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 2000,
  //           energy_cons: 580.5093
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 2001,
  //           energy_cons: 525.00134
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 2002,
  //           energy_cons: 546.16
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 2003,
  //           energy_cons: 482.03232
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 2004,
  //           energy_cons: 490.9507
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 2005,
  //           energy_cons: 560.7768
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 2006,
  //           energy_cons: 513.5541
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 2007,
  //           energy_cons: 551.2713
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 2008,
  //           energy_cons: 564.5225
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 2009,
  //           energy_cons: 521.2537
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 2010,
  //           energy_cons: 500.39438
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 2011,
  //           energy_cons: 507.51987
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 2012,
  //           energy_cons: 562.0164
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 2013,
  //           energy_cons: 526.8815
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 2014,
  //           energy_cons: 542.59454
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 2015,
  //           energy_cons: 547.9137
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 2016,
  //           energy_cons: 554.9597
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 2017,
  //           energy_cons: 557.53674
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 2018,
  //           energy_cons: 550.122
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 2019,
  //           energy_cons: 515.0617
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 2020,
  //           energy_cons: 559.0839
  //         },
  //         {
  //           name: "Norway",
  //           code: "NOR",
  //           year: 2021,
  //           energy_cons: 568.11847
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1965,
  //           energy_cons: 0.097380556
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1966,
  //           energy_cons: 0.12186111
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1967,
  //           energy_cons: 0.5409833
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1968,
  //           energy_cons: 0.65190834
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1969,
  //           energy_cons: 0.9285111
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1970,
  //           energy_cons: 0.9359056
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1971,
  //           energy_cons: 15.471502
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1972,
  //           energy_cons: 17.677217
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1973,
  //           energy_cons: 15.375914
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1974,
  //           energy_cons: 14.127883
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1975,
  //           energy_cons: 12.904697
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1976,
  //           energy_cons: 14.856398
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1977,
  //           energy_cons: 14.312169
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1978,
  //           energy_cons: 16.642376
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1979,
  //           energy_cons: 19.173227
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1980,
  //           energy_cons: 17.058378
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1981,
  //           energy_cons: 18.027998
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1982,
  //           energy_cons: 23.88195
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1983,
  //           energy_cons: 22.350086
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1984,
  //           energy_cons: 32.493595
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1985,
  //           energy_cons: 33.571022
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1986,
  //           energy_cons: 31.459568
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1987,
  //           energy_cons: 35.435234
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1988,
  //           energy_cons: 34.389076
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1989,
  //           energy_cons: 39.019863
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1990,
  //           energy_cons: 48.86399
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1991,
  //           energy_cons: 64.86825
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1992,
  //           energy_cons: 62.4909
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1993,
  //           energy_cons: 59.83801
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1994,
  //           energy_cons: 56.84055
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1995,
  //           energy_cons: 65.89965
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1996,
  //           energy_cons: 67.78354
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1997,
  //           energy_cons: 69.71264
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1998,
  //           energy_cons: 71.647125
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 1999,
  //           energy_cons: 82.48155
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 2000,
  //           energy_cons: 114.59935
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 2001,
  //           energy_cons: 126.48574
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 2002,
  //           energy_cons: 137.64601
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 2003,
  //           energy_cons: 142.57997
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 2004,
  //           energy_cons: 132.68091
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 2005,
  //           energy_cons: 159.32643
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 2006,
  //           energy_cons: 174.06621
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 2007,
  //           energy_cons: 173.40076
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 2008,
  //           energy_cons: 203.97527
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 2009,
  //           energy_cons: 202.45877
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 2010,
  //           energy_cons: 240.68904
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 2011,
  //           energy_cons: 261.7398
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 2012,
  //           energy_cons: 285.16986
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 2013,
  //           energy_cons: 318.85916
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 2014,
  //           energy_cons: 317.48688
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 2015,
  //           energy_cons: 335.56577
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 2016,
  //           energy_cons: 336.2422
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 2017,
  //           energy_cons: 361.2318
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 2018,
  //           energy_cons: 380.82584
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 2019,
  //           energy_cons: 378.59448
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 2020,
  //           energy_cons: 370.88666
  //         },
  //         {
  //           name: "Oman",
  //           code: "OMN",
  //           year: 2021,
  //           energy_cons: 416.4625
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1965,
  //           energy_cons: 82.22446
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1966,
  //           energy_cons: 82.84071
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1967,
  //           energy_cons: 91.71957
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1968,
  //           energy_cons: 104.131035
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1969,
  //           energy_cons: 104.63179
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1970,
  //           energy_cons: 102.95153
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1971,
  //           energy_cons: 96.2362
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1972,
  //           energy_cons: 89.52728
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1973,
  //           energy_cons: 95.656105
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1974,
  //           energy_cons: 103.62483
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1975,
  //           energy_cons: 108.77945
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1976,
  //           energy_cons: 110.465706
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1977,
  //           energy_cons: 119.55116
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1978,
  //           energy_cons: 128.0085
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1979,
  //           energy_cons: 139.54419
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1980,
  //           energy_cons: 154.74867
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1981,
  //           energy_cons: 166.37914
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1982,
  //           energy_cons: 183.49089
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1983,
  //           energy_cons: 196.1527
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1984,
  //           energy_cons: 207.59
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1985,
  //           energy_cons: 218.16379
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1986,
  //           energy_cons: 231.23979
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1987,
  //           energy_cons: 259.38654
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1988,
  //           energy_cons: 275.5609
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1989,
  //           energy_cons: 292.24484
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1990,
  //           energy_cons: 305.49796
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1991,
  //           energy_cons: 323.70068
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1992,
  //           energy_cons: 340.0286
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1993,
  //           energy_cons: 376.3136
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1994,
  //           energy_cons: 389.3819
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1995,
  //           energy_cons: 410.67953
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1996,
  //           energy_cons: 437.42648
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1997,
  //           energy_cons: 422.88452
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1998,
  //           energy_cons: 453.84888
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 1999,
  //           energy_cons: 473.72208
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 2000,
  //           energy_cons: 483.7543
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 2001,
  //           energy_cons: 495.15015
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 2002,
  //           energy_cons: 514.1093
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 2003,
  //           energy_cons: 559.92676
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 2004,
  //           energy_cons: 623.06195
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 2005,
  //           energy_cons: 646.4842
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 2006,
  //           energy_cons: 681.3318
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 2007,
  //           energy_cons: 724.4106
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 2008,
  //           energy_cons: 727.99817
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 2009,
  //           energy_cons: 737.5944
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 2010,
  //           energy_cons: 740.76044
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 2011,
  //           energy_cons: 740.26276
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 2012,
  //           energy_cons: 687.83606
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 2013,
  //           energy_cons: 751.7423
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 2014,
  //           energy_cons: 775.9353
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 2015,
  //           energy_cons: 815.85895
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 2016,
  //           energy_cons: 889.7077
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 2017,
  //           energy_cons: 941.86383
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 2018,
  //           energy_cons: 971.5406
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 2019,
  //           energy_cons: 983.5335
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 2020,
  //           energy_cons: 976.47577
  //         },
  //         {
  //           name: "Pakistan",
  //           code: "PAK",
  //           year: 2021,
  //           energy_cons: 1071.3097
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1965,
  //           energy_cons: 56.491356
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1966,
  //           energy_cons: 68.67201
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1967,
  //           energy_cons: 69.93908
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1968,
  //           energy_cons: 71.24648
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1969,
  //           energy_cons: 71.80092
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1970,
  //           energy_cons: 74.04615
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1971,
  //           energy_cons: 77.5705
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1972,
  //           energy_cons: 69.58752
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1973,
  //           energy_cons: 79.860115
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1974,
  //           energy_cons: 92.495865
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1975,
  //           energy_cons: 95.26347
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1976,
  //           energy_cons: 96.81244
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1977,
  //           energy_cons: 97.4299
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1978,
  //           energy_cons: 96.95678
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1979,
  //           energy_cons: 100.911316
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1980,
  //           energy_cons: 107.755066
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1981,
  //           energy_cons: 113.242775
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1982,
  //           energy_cons: 113.24445
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1983,
  //           energy_cons: 100.22452
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1984,
  //           energy_cons: 105.67862
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1985,
  //           energy_cons: 104.93255
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1986,
  //           energy_cons: 112.292984
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1987,
  //           energy_cons: 120.66844
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1988,
  //           energy_cons: 117.73908
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1989,
  //           energy_cons: 108.28975
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1990,
  //           energy_cons: 107.128624
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1991,
  //           energy_cons: 106.3726
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1992,
  //           energy_cons: 103.589294
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1993,
  //           energy_cons: 112.953926
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1994,
  //           energy_cons: 122.900536
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1995,
  //           energy_cons: 133.88016
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1996,
  //           energy_cons: 138.43126
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1997,
  //           energy_cons: 139.60266
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1998,
  //           energy_cons: 140.17175
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 1999,
  //           energy_cons: 144.29672
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 2000,
  //           energy_cons: 148.75475
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 2001,
  //           energy_cons: 147.13654
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 2002,
  //           energy_cons: 150.63754
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 2003,
  //           energy_cons: 148.57599
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 2004,
  //           energy_cons: 157.88731
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 2005,
  //           energy_cons: 165.13661
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 2006,
  //           energy_cons: 166.63129
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 2007,
  //           energy_cons: 182.38348
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 2008,
  //           energy_cons: 196.3858
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 2009,
  //           energy_cons: 201.37639
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 2010,
  //           energy_cons: 229.27219
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 2011,
  //           energy_cons: 253.0443
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 2012,
  //           energy_cons: 261.16895
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 2013,
  //           energy_cons: 266.95703
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 2014,
  //           energy_cons: 273.71625
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 2015,
  //           energy_cons: 286.8099
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 2016,
  //           energy_cons: 306.1133
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 2017,
  //           energy_cons: 315.21786
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 2018,
  //           energy_cons: 332.0533
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 2019,
  //           energy_cons: 341.61493
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 2020,
  //           energy_cons: 288.64346
  //         },
  //         {
  //           name: "Peru",
  //           code: "PER",
  //           year: 2021,
  //           energy_cons: 333.23798
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1965,
  //           energy_cons: 54.78574
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1966,
  //           energy_cons: 59.189976
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1967,
  //           energy_cons: 66.481346
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1968,
  //           energy_cons: 75.07526
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1969,
  //           energy_cons: 80.41724
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1970,
  //           energy_cons: 91.505486
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1971,
  //           energy_cons: 104.6748
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1972,
  //           energy_cons: 103.64541
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1973,
  //           energy_cons: 120.954094
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1974,
  //           energy_cons: 112.68782
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1975,
  //           energy_cons: 121.98148
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1976,
  //           energy_cons: 126.78731
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1977,
  //           energy_cons: 136.65462
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1978,
  //           energy_cons: 142.60538
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1979,
  //           energy_cons: 148.64824
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1980,
  //           energy_cons: 146.28912
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1981,
  //           energy_cons: 145.79858
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1982,
  //           energy_cons: 141.70377
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1983,
  //           energy_cons: 153.294
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1984,
  //           energy_cons: 139.76021
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1985,
  //           energy_cons: 135.05885
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1986,
  //           energy_cons: 137.1727
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1987,
  //           energy_cons: 148.379
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1988,
  //           energy_cons: 163.63722
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1989,
  //           energy_cons: 177.00485
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1990,
  //           energy_cons: 183.79082
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1991,
  //           energy_cons: 177.8127
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1992,
  //           energy_cons: 206.0226
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1993,
  //           energy_cons: 213.12357
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1994,
  //           energy_cons: 226.44576
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1995,
  //           energy_cons: 252.15076
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1996,
  //           energy_cons: 271.17865
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1997,
  //           energy_cons: 291.62576
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1998,
  //           energy_cons: 296.01816
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 1999,
  //           energy_cons: 302.09827
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 2000,
  //           energy_cons: 301.42435
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 2001,
  //           energy_cons: 296.81033
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 2002,
  //           energy_cons: 294.8501
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 2003,
  //           energy_cons: 305.39185
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 2004,
  //           energy_cons: 315.62805
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 2005,
  //           energy_cons: 314.25513
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 2006,
  //           energy_cons: 305.12155
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 2007,
  //           energy_cons: 317.08655
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 2008,
  //           energy_cons: 327.77258
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 2009,
  //           energy_cons: 331.10715
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 2010,
  //           energy_cons: 340.9177
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 2011,
  //           energy_cons: 347.88113
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 2012,
  //           energy_cons: 359.13974
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 2013,
  //           energy_cons: 384.81
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 2014,
  //           energy_cons: 404.5819
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 2015,
  //           energy_cons: 443.45428
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 2016,
  //           energy_cons: 484.44727
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 2017,
  //           energy_cons: 531.5113
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 2018,
  //           energy_cons: 546.3565
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 2019,
  //           energy_cons: 562.6972
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 2020,
  //           energy_cons: 509.95746
  //         },
  //         {
  //           name: "Philippines",
  //           code: "PHL",
  //           year: 2021,
  //           energy_cons: 544.9105
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1965,
  //           energy_cons: 776.0532
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1966,
  //           energy_cons: 791.17816
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1967,
  //           energy_cons: 814.29987
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1968,
  //           energy_cons: 876.36676
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1969,
  //           energy_cons: 936.0661
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1970,
  //           energy_cons: 987.92114
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1971,
  //           energy_cons: 1019.14355
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1972,
  //           energy_cons: 1074.9188
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1973,
  //           energy_cons: 1095.064
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1974,
  //           energy_cons: 1131.2563
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1975,
  //           energy_cons: 1220.2694
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1976,
  //           energy_cons: 1285.5217
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1977,
  //           energy_cons: 1340.4154
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1978,
  //           energy_cons: 1407.3624
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1979,
  //           energy_cons: 1428.2526
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1980,
  //           energy_cons: 1495.6301
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1981,
  //           energy_cons: 1348.4725
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1982,
  //           energy_cons: 1373.0583
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1983,
  //           energy_cons: 1379.3741
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1984,
  //           energy_cons: 1433.9169
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1985,
  //           energy_cons: 1466.4424
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1986,
  //           energy_cons: 1507.76
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1987,
  //           energy_cons: 1556.6345
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1988,
  //           energy_cons: 1526.9053
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1989,
  //           energy_cons: 1469.5233
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1990,
  //           energy_cons: 1210.3297
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1991,
  //           energy_cons: 1184.164
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1992,
  //           energy_cons: 1132.3966
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1993,
  //           energy_cons: 1131.8475
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1994,
  //           energy_cons: 1083.18
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1995,
  //           energy_cons: 1108.7225
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1996,
  //           energy_cons: 1163.95
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1997,
  //           energy_cons: 1152.5406
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1998,
  //           energy_cons: 1104.1995
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 1999,
  //           energy_cons: 1082.7218
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 2000,
  //           energy_cons: 1017.52454
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 2001,
  //           energy_cons: 1010.4564
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 2002,
  //           energy_cons: 999.5793
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 2003,
  //           energy_cons: 1034.2067
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 2004,
  //           energy_cons: 1041.2186
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 2005,
  //           energy_cons: 1064.3455
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 2006,
  //           energy_cons: 1116.9812
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 2007,
  //           energy_cons: 1113.8153
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 2008,
  //           energy_cons: 1133.3119
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 2009,
  //           energy_cons: 1093.6166
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 2010,
  //           energy_cons: 1166.1749
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 2011,
  //           energy_cons: 1172.9304
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 2012,
  //           energy_cons: 1139.2412
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 2013,
  //           energy_cons: 1141.9489
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 2014,
  //           energy_cons: 1100.9438
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 2015,
  //           energy_cons: 1112.3146
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 2016,
  //           energy_cons: 1160.6875
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 2017,
  //           energy_cons: 1205.9008
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 2018,
  //           energy_cons: 1219.6346
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 2019,
  //           energy_cons: 1184.7482
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 2020,
  //           energy_cons: 1134.18
  //         },
  //         {
  //           name: "Poland",
  //           code: "POL",
  //           year: 2021,
  //           energy_cons: 1233.894
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1965,
  //           energy_cons: 49.829292
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1966,
  //           energy_cons: 54.55657
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1967,
  //           energy_cons: 58.333893
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1968,
  //           energy_cons: 59.39734
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1969,
  //           energy_cons: 64.35529
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1970,
  //           energy_cons: 76.88243
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1971,
  //           energy_cons: 84.65108
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1972,
  //           energy_cons: 92.02711
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1973,
  //           energy_cons: 101.72355
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1974,
  //           energy_cons: 106.48222
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1975,
  //           energy_cons: 105.827126
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1976,
  //           energy_cons: 104.73025
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1977,
  //           energy_cons: 118.722786
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1978,
  //           energy_cons: 125.037865
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1979,
  //           energy_cons: 132.60844
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1980,
  //           energy_cons: 128.8047
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1981,
  //           energy_cons: 126.46209
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1982,
  //           energy_cons: 136.85953
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1983,
  //           energy_cons: 141.71661
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1984,
  //           energy_cons: 147.62653
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1985,
  //           energy_cons: 150.63393
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1986,
  //           energy_cons: 159.43527
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1987,
  //           energy_cons: 163.16216
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1988,
  //           energy_cons: 181.04091
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1989,
  //           energy_cons: 195.47192
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1990,
  //           energy_cons: 198.46423
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1991,
  //           energy_cons: 205.95268
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1992,
  //           energy_cons: 208.12202
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1993,
  //           energy_cons: 214.16861
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1994,
  //           energy_cons: 221.91728
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1995,
  //           energy_cons: 243.20697
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1996,
  //           energy_cons: 250.78986
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1997,
  //           energy_cons: 254.40166
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1998,
  //           energy_cons: 277.51154
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 1999,
  //           energy_cons: 283.82666
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 2000,
  //           energy_cons: 293.32214
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 2001,
  //           energy_cons: 297.6647
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 2002,
  //           energy_cons: 295.414
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 2003,
  //           energy_cons: 303.3654
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 2004,
  //           energy_cons: 297.52444
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 2005,
  //           energy_cons: 296.95776
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 2006,
  //           energy_cons: 294.78757
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 2007,
  //           energy_cons: 297.06833
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 2008,
  //           energy_cons: 286.7482
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 2009,
  //           energy_cons: 289.2268
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 2010,
  //           energy_cons: 305.08783
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 2011,
  //           energy_cons: 291.03558
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 2012,
  //           energy_cons: 265.7786
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 2013,
  //           energy_cons: 291.79355
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 2014,
  //           energy_cons: 297.68082
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 2015,
  //           energy_cons: 291.2281
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 2016,
  //           energy_cons: 311.496
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 2017,
  //           energy_cons: 301.8779
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 2018,
  //           energy_cons: 307.6907
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 2019,
  //           energy_cons: 293.03677
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 2020,
  //           energy_cons: 264.86746
  //         },
  //         {
  //           name: "Portugal",
  //           code: "PRT",
  //           year: 2021,
  //           energy_cons: 265.69467
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1965,
  //           energy_cons: 1.4110831
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1966,
  //           energy_cons: 1.4206978
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1967,
  //           energy_cons: 2.0353773
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1968,
  //           energy_cons: 6.439564
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1969,
  //           energy_cons: 10.11864
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1970,
  //           energy_cons: 11.525687
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1971,
  //           energy_cons: 11.481247
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1972,
  //           energy_cons: 12.700935
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1973,
  //           energy_cons: 18.021015
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1974,
  //           energy_cons: 15.712179
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1975,
  //           energy_cons: 23.445347
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1976,
  //           energy_cons: 15.060141
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1977,
  //           energy_cons: 20.983208
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1978,
  //           energy_cons: 20.12846
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1979,
  //           energy_cons: 50.366066
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1980,
  //           energy_cons: 53.36981
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1981,
  //           energy_cons: 51.05921
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1982,
  //           energy_cons: 59.333015
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1983,
  //           energy_cons: 61.85436
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1984,
  //           energy_cons: 70.41024
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1985,
  //           energy_cons: 66.110016
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1986,
  //           energy_cons: 72.07097
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1987,
  //           energy_cons: 69.853096
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1988,
  //           energy_cons: 73.53971
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1989,
  //           energy_cons: 77.74552
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1990,
  //           energy_cons: 78.83766
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1991,
  //           energy_cons: 90.81282
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1992,
  //           energy_cons: 144.28647
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1993,
  //           energy_cons: 154.29291
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1994,
  //           energy_cons: 156.52664
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1995,
  //           energy_cons: 155.9913
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1996,
  //           energy_cons: 114.8973
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1997,
  //           energy_cons: 125.368385
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1998,
  //           energy_cons: 134.98816
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 1999,
  //           energy_cons: 150.26718
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 2000,
  //           energy_cons: 134.19913
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 2001,
  //           energy_cons: 128.97125
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 2002,
  //           energy_cons: 142.0285
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 2003,
  //           energy_cons: 162.93604
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 2004,
  //           energy_cons: 196.8703
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 2005,
  //           energy_cons: 222.8612
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 2006,
  //           energy_cons: 234.27272
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 2007,
  //           energy_cons: 255.3497
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 2008,
  //           energy_cons: 283.0817
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 2009,
  //           energy_cons: 287.01285
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 2010,
  //           energy_cons: 333.88022
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 2011,
  //           energy_cons: 390.73123
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 2012,
  //           energy_cons: 443.05487
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 2013,
  //           energy_cons: 480.88086
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 2014,
  //           energy_cons: 519.42004
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 2015,
  //           energy_cons: 592.2141
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 2016,
  //           energy_cons: 579.3438
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 2017,
  //           energy_cons: 560.9896
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 2018,
  //           energy_cons: 560.40784
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 2019,
  //           energy_cons: 585.164
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 2020,
  //           energy_cons: 514.73596
  //         },
  //         {
  //           name: "Qatar",
  //           code: "QAT",
  //           year: 2021,
  //           energy_cons: 535.3304
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1965,
  //           energy_cons: 278.72092
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1966,
  //           energy_cons: 297.26987
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1967,
  //           energy_cons: 331.7335
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1968,
  //           energy_cons: 352.97977
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1969,
  //           energy_cons: 405.81186
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1970,
  //           energy_cons: 432.01083
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1971,
  //           energy_cons: 458.5655
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1972,
  //           energy_cons: 483.27585
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1973,
  //           energy_cons: 525.8238
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1974,
  //           energy_cons: 529.4953
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1975,
  //           energy_cons: 577.51086
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1976,
  //           energy_cons: 622.3426
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1977,
  //           energy_cons: 659.9405
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1978,
  //           energy_cons: 710.7539
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1979,
  //           energy_cons: 724.81635
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1980,
  //           energy_cons: 731.84656
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1981,
  //           energy_cons: 733.58716
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1982,
  //           energy_cons: 727.2737
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1983,
  //           energy_cons: 722.2037
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1984,
  //           energy_cons: 716.9985
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1985,
  //           energy_cons: 714.904
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1986,
  //           energy_cons: 730.0828
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1987,
  //           energy_cons: 757.117
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1988,
  //           energy_cons: 771.1354
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1989,
  //           energy_cons: 772.4773
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1990,
  //           energy_cons: 735.2153
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1991,
  //           energy_cons: 624.4442
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1992,
  //           energy_cons: 550.6739
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1993,
  //           energy_cons: 535.22186
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1994,
  //           energy_cons: 504.85086
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1995,
  //           energy_cons: 554.8027
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1996,
  //           energy_cons: 551.40155
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1997,
  //           energy_cons: 523.3253
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1998,
  //           energy_cons: 478.84515
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 1999,
  //           energy_cons: 421.17096
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 2000,
  //           energy_cons: 420.3319
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 2001,
  //           energy_cons: 425.10504
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 2002,
  //           energy_cons: 441.30682
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 2003,
  //           energy_cons: 441.2445
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 2004,
  //           energy_cons: 457.3245
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 2005,
  //           energy_cons: 458.29587
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 2006,
  //           energy_cons: 467.62265
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 2007,
  //           energy_cons: 451.19214
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 2008,
  //           energy_cons: 452.44724
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 2009,
  //           energy_cons: 395.30527
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 2010,
  //           energy_cons: 398.93295
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 2011,
  //           energy_cons: 408.6753
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 2012,
  //           energy_cons: 392.96036
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 2013,
  //           energy_cons: 366.62045
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 2014,
  //           energy_cons: 380.50665
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 2015,
  //           energy_cons: 382.46426
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 2016,
  //           energy_cons: 382.57004
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 2017,
  //           energy_cons: 388.99704
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 2018,
  //           energy_cons: 396.42142
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 2019,
  //           energy_cons: 387.3418
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 2020,
  //           energy_cons: 369.3487
  //         },
  //         {
  //           name: "Romania",
  //           code: "ROU",
  //           year: 2021,
  //           energy_cons: 389.81067
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 1985,
  //           energy_cons: 9555.139
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 1986,
  //           energy_cons: 9724.456
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 1987,
  //           energy_cons: 10042.625
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 1988,
  //           energy_cons: 10218.062
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 1989,
  //           energy_cons: 10255.829
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 1990,
  //           energy_cons: 10076.104
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 1991,
  //           energy_cons: 9938.644
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 1992,
  //           energy_cons: 9566.62
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 1993,
  //           energy_cons: 8919.131
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 1994,
  //           energy_cons: 8138.4243
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 1995,
  //           energy_cons: 7702.033
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 1996,
  //           energy_cons: 7413.202
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 1997,
  //           energy_cons: 7011.0054
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 1998,
  //           energy_cons: 6997.947
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 1999,
  //           energy_cons: 7086.5376
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 2000,
  //           energy_cons: 7214.0903
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 2001,
  //           energy_cons: 7328.2676
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 2002,
  //           energy_cons: 7298.461
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 2003,
  //           energy_cons: 7448.4673
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 2004,
  //           energy_cons: 7514.0884
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 2005,
  //           energy_cons: 7503.9023
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 2006,
  //           energy_cons: 7836.9365
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 2007,
  //           energy_cons: 7878.3345
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 2008,
  //           energy_cons: 7914.626
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 2009,
  //           energy_cons: 7522.19
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 2010,
  //           energy_cons: 7814.5776
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 2011,
  //           energy_cons: 8080.63
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 2012,
  //           energy_cons: 8098.7964
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 2013,
  //           energy_cons: 7996.468
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 2014,
  //           energy_cons: 8015.624
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 2015,
  //           energy_cons: 7880.102
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 2016,
  //           energy_cons: 8053.729
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 2017,
  //           energy_cons: 8102.4023
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 2018,
  //           energy_cons: 8400.896
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 2019,
  //           energy_cons: 8339.891
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 2020,
  //           energy_cons: 8022.302
  //         },
  //         {
  //           name: "Russia",
  //           code: "RUS",
  //           year: 2021,
  //           energy_cons: 8693.623
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1965,
  //           energy_cons: 235.13956
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1966,
  //           energy_cons: 238.3216
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1967,
  //           energy_cons: 241.7649
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1968,
  //           energy_cons: 245.51805
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1969,
  //           energy_cons: 249.66277
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1970,
  //           energy_cons: 262.85544
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1971,
  //           energy_cons: 263.2719
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1972,
  //           energy_cons: 282.16907
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1973,
  //           energy_cons: 301.00037
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1974,
  //           energy_cons: 319.35376
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1975,
  //           energy_cons: 253.26085
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1976,
  //           energy_cons: 292.7943
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1977,
  //           energy_cons: 345.7625
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1978,
  //           energy_cons: 385.33572
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1979,
  //           energy_cons: 466.8433
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1980,
  //           energy_cons: 419.91632
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1981,
  //           energy_cons: 501.23676
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1982,
  //           energy_cons: 551.85297
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1983,
  //           energy_cons: 597.982
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1984,
  //           energy_cons: 715.29803
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1985,
  //           energy_cons: 729.7338
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1986,
  //           energy_cons: 784.659
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1987,
  //           energy_cons: 831.73804
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1988,
  //           energy_cons: 870.2746
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1989,
  //           energy_cons: 856.5453
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1990,
  //           energy_cons: 928.33704
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1991,
  //           energy_cons: 972.4523
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1992,
  //           energy_cons: 981.7563
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1993,
  //           energy_cons: 1002.85034
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1994,
  //           energy_cons: 1159.5804
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1995,
  //           energy_cons: 1130.0059
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1996,
  //           energy_cons: 1168.5529
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1997,
  //           energy_cons: 1190.249
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1998,
  //           energy_cons: 1252.577
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 1999,
  //           energy_cons: 1275.4303
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 2000,
  //           energy_cons: 1334.8796
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 2001,
  //           energy_cons: 1422.3324
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 2002,
  //           energy_cons: 1481.3827
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 2003,
  //           energy_cons: 1569.191
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 2004,
  //           energy_cons: 1702.4476
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 2005,
  //           energy_cons: 1759.0061
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 2006,
  //           energy_cons: 1830.7106
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 2007,
  //           energy_cons: 1910.5583
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 2008,
  //           energy_cons: 2095.5122
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 2009,
  //           energy_cons: 2195.1763
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 2010,
  //           energy_cons: 2426.7224
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 2011,
  //           energy_cons: 2551.069
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 2012,
  //           energy_cons: 2705.2441
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 2013,
  //           energy_cons: 2717.1887
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 2014,
  //           energy_cons: 2925.6511
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 2015,
  //           energy_cons: 3018.1365
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 2016,
  //           energy_cons: 3098.9846
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 2017,
  //           energy_cons: 3076.991
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 2018,
  //           energy_cons: 3039.5928
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 2019,
  //           energy_cons: 2997.4185
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 2020,
  //           energy_cons: 2948.662
  //         },
  //         {
  //           name: "Saudi Arabia",
  //           code: "SAU",
  //           year: 2021,
  //           energy_cons: 3006.7258
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1965,
  //           energy_cons: 47.888004
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1966,
  //           energy_cons: 54.743725
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1967,
  //           energy_cons: 65.75602
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1968,
  //           energy_cons: 81.734535
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1969,
  //           energy_cons: 80.31852
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1970,
  //           energy_cons: 87.205376
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1971,
  //           energy_cons: 75.697876
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1972,
  //           energy_cons: 94.78759
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1973,
  //           energy_cons: 89.32662
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1974,
  //           energy_cons: 88.05852
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1975,
  //           energy_cons: 85.98596
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1976,
  //           energy_cons: 101.99188
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1977,
  //           energy_cons: 102.37463
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1978,
  //           energy_cons: 105.37364
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1979,
  //           energy_cons: 112.33332
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1980,
  //           energy_cons: 111.57116
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1981,
  //           energy_cons: 128.3598
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1982,
  //           energy_cons: 124.893654
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1983,
  //           energy_cons: 132.31157
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1984,
  //           energy_cons: 139.10254
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1985,
  //           energy_cons: 141.89365
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1986,
  //           energy_cons: 164.75604
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1987,
  //           energy_cons: 173.23671
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1988,
  //           energy_cons: 200.42961
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1989,
  //           energy_cons: 228.53755
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1990,
  //           energy_cons: 273.1036
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1991,
  //           energy_cons: 278.31494
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1992,
  //           energy_cons: 298.58746
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1993,
  //           energy_cons: 326.21194
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1994,
  //           energy_cons: 373.08353
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1995,
  //           energy_cons: 388.9409
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1996,
  //           energy_cons: 392.47714
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1997,
  //           energy_cons: 412.80066
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1998,
  //           energy_cons: 418.50928
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 1999,
  //           energy_cons: 414.3262
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 2000,
  //           energy_cons: 443.01443
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 2001,
  //           energy_cons: 503.08743
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 2002,
  //           energy_cons: 494.23105
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 2003,
  //           energy_cons: 466.99045
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 2004,
  //           energy_cons: 522.70825
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 2005,
  //           energy_cons: 549.2367
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 2006,
  //           energy_cons: 604.333
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 2007,
  //           energy_cons: 648.871
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 2008,
  //           energy_cons: 690.3153
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 2009,
  //           energy_cons: 742.3941
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 2010,
  //           energy_cons: 797.87634
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 2011,
  //           energy_cons: 829.5663
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 2012,
  //           energy_cons: 833.1105
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 2013,
  //           energy_cons: 851.48694
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 2014,
  //           energy_cons: 876.2125
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 2015,
  //           energy_cons: 931.7654
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 2016,
  //           energy_cons: 966.84766
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 2017,
  //           energy_cons: 997.2166
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 2018,
  //           energy_cons: 1002.66327
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 2019,
  //           energy_cons: 981.4853
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 2020,
  //           energy_cons: 955.39935
  //         },
  //         {
  //           name: "Singapore",
  //           code: "SGP",
  //           year: 2021,
  //           energy_cons: 960.19666
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1965,
  //           energy_cons: 106.83622
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1966,
  //           energy_cons: 110.583595
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1967,
  //           energy_cons: 111.16376
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1968,
  //           energy_cons: 122.68507
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1969,
  //           energy_cons: 128.11635
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1970,
  //           energy_cons: 141.7335
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1971,
  //           energy_cons: 151.9201
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1972,
  //           energy_cons: 159.76607
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1973,
  //           energy_cons: 166.21617
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1974,
  //           energy_cons: 174.93802
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1975,
  //           energy_cons: 183.08553
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1976,
  //           energy_cons: 189.93779
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1977,
  //           energy_cons: 199.63968
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1978,
  //           energy_cons: 209.45049
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1979,
  //           energy_cons: 215.49113
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1980,
  //           energy_cons: 219.0511
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1981,
  //           energy_cons: 217.34256
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1982,
  //           energy_cons: 215.01793
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1983,
  //           energy_cons: 215.63943
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1984,
  //           energy_cons: 232.29736
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1985,
  //           energy_cons: 239.66719
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1986,
  //           energy_cons: 237.59348
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1987,
  //           energy_cons: 242.9572
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1988,
  //           energy_cons: 244.17126
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1989,
  //           energy_cons: 247.67601
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1990,
  //           energy_cons: 248.35374
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1991,
  //           energy_cons: 222.18843
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1992,
  //           energy_cons: 213.74226
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1993,
  //           energy_cons: 209.97612
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1994,
  //           energy_cons: 206.84326
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1995,
  //           energy_cons: 209.74928
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1996,
  //           energy_cons: 211.20242
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1997,
  //           energy_cons: 207.3214
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1998,
  //           energy_cons: 209.52092
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 1999,
  //           energy_cons: 211.29335
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 2000,
  //           energy_cons: 218.24721
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 2001,
  //           energy_cons: 224.55817
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 2002,
  //           energy_cons: 226.42682
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 2003,
  //           energy_cons: 219.32616
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 2004,
  //           energy_cons: 213.59587
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 2005,
  //           energy_cons: 225.18439
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 2006,
  //           energy_cons: 217.3938
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 2007,
  //           energy_cons: 203.90868
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 2008,
  //           energy_cons: 211.0026
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 2009,
  //           energy_cons: 192.19072
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 2010,
  //           energy_cons: 204.73212
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 2011,
  //           energy_cons: 197.00319
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 2012,
  //           energy_cons: 189.30908
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 2013,
  //           energy_cons: 194.08029
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 2014,
  //           energy_cons: 181.19461
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 2015,
  //           energy_cons: 182.97299
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 2016,
  //           energy_cons: 183.81154
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 2017,
  //           energy_cons: 194.24858
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 2018,
  //           energy_cons: 191.07236
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 2019,
  //           energy_cons: 184.84892
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 2020,
  //           energy_cons: 180.85745
  //         },
  //         {
  //           name: "Slovakia",
  //           code: "SVK",
  //           year: 2021,
  //           energy_cons: 197.18175
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 1990,
  //           energy_cons: 69.29793
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 1991,
  //           energy_cons: 69.40945
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 1992,
  //           energy_cons: 64.88118
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 1993,
  //           energy_cons: 66.65802
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 1994,
  //           energy_cons: 70.94977
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 1995,
  //           energy_cons: 74.497665
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 1996,
  //           energy_cons: 78.158264
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 1997,
  //           energy_cons: 79.932205
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 1998,
  //           energy_cons: 80.1559
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 1999,
  //           energy_cons: 79.327515
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 2000,
  //           energy_cons: 78.62627
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 2001,
  //           energy_cons: 82.19341
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 2002,
  //           energy_cons: 81.775505
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 2003,
  //           energy_cons: 80.21294
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 2004,
  //           energy_cons: 85.180244
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 2005,
  //           energy_cons: 85.18694
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 2006,
  //           energy_cons: 85.954254
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 2007,
  //           energy_cons: 85.46717
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 2008,
  //           energy_cons: 93.64213
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 2009,
  //           energy_cons: 86.507126
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 2010,
  //           energy_cons: 86.66013
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 2011,
  //           energy_cons: 84.13502
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 2012,
  //           energy_cons: 81.75844
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 2013,
  //           energy_cons: 80.88276
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 2014,
  //           energy_cons: 82.971504
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 2015,
  //           energy_cons: 74.82731
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 2016,
  //           energy_cons: 79.97818
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 2017,
  //           energy_cons: 80.83881
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 2018,
  //           energy_cons: 82.48029
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 2019,
  //           energy_cons: 80.09161
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 2020,
  //           energy_cons: 77.384926
  //         },
  //         {
  //           name: "Slovenia",
  //           code: "SVN",
  //           year: 2021,
  //           energy_cons: 74.99092
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1965,
  //           energy_cons: 354.22852
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1966,
  //           energy_cons: 356.42896
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1967,
  //           energy_cons: 371.15485
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1968,
  //           energy_cons: 391.70795
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1969,
  //           energy_cons: 403.31476
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1970,
  //           energy_cons: 421.47787
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1971,
  //           energy_cons: 454.02643
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1972,
  //           energy_cons: 469.0293
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1973,
  //           energy_cons: 504.60483
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1974,
  //           energy_cons: 519.0946
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1975,
  //           energy_cons: 553.40765
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1976,
  //           energy_cons: 577.60187
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1977,
  //           energy_cons: 591.76013
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1978,
  //           energy_cons: 586.007
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1979,
  //           energy_cons: 605.09796
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1980,
  //           energy_cons: 645.8642
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1981,
  //           energy_cons: 751.9262
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1982,
  //           energy_cons: 808.7155
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1983,
  //           energy_cons: 819.4531
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1984,
  //           energy_cons: 895.5216
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1985,
  //           energy_cons: 914.55615
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1986,
  //           energy_cons: 931.7011
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1987,
  //           energy_cons: 946.4509
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1988,
  //           energy_cons: 1042.2997
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1989,
  //           energy_cons: 995.7217
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1990,
  //           energy_cons: 1029.669
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1991,
  //           energy_cons: 1022.2481
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1992,
  //           energy_cons: 1027.0382
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1993,
  //           energy_cons: 1025.258
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1994,
  //           energy_cons: 1069.309
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1995,
  //           energy_cons: 1117.5164
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1996,
  //           energy_cons: 1139.7626
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1997,
  //           energy_cons: 1165.5427
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1998,
  //           energy_cons: 1145.0254
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 1999,
  //           energy_cons: 1183.7448
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 2000,
  //           energy_cons: 1185.3832
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 2001,
  //           energy_cons: 1191.5364
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 2002,
  //           energy_cons: 1161.1248
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 2003,
  //           energy_cons: 1257.9574
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 2004,
  //           energy_cons: 1372.7721
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 2005,
  //           energy_cons: 1299.5643
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 2006,
  //           energy_cons: 1326.0608
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 2007,
  //           energy_cons: 1362.1926
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 2008,
  //           energy_cons: 1459.7079
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 2009,
  //           energy_cons: 1453.2257
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 2010,
  //           energy_cons: 1462.7987
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 2011,
  //           energy_cons: 1444.9585
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 2012,
  //           energy_cons: 1422.7034
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 2013,
  //           energy_cons: 1429.0052
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 2014,
  //           energy_cons: 1445.5112
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 2015,
  //           energy_cons: 1415.2959
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 2016,
  //           energy_cons: 1481.5773
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 2017,
  //           energy_cons: 1476.505
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 2018,
  //           energy_cons: 1423.7683
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 2019,
  //           energy_cons: 1489.7394
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 2020,
  //           energy_cons: 1375.7662
  //         },
  //         {
  //           name: "South Africa",
  //           code: "ZAF",
  //           year: 2021,
  //           energy_cons: 1382.8973
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1965,
  //           energy_cons: 74.81707
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1966,
  //           energy_cons: 90.76834
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1967,
  //           energy_cons: 104.28453
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1968,
  //           energy_cons: 119.51965
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1969,
  //           energy_cons: 144.33156
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1970,
  //           energy_cons: 167.46579
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1971,
  //           energy_cons: 181.19019
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1972,
  //           energy_cons: 187.85287
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1973,
  //           energy_cons: 232.33731
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1974,
  //           energy_cons: 241.56969
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1975,
  //           energy_cons: 265.5971
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1976,
  //           energy_cons: 297.13058
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1977,
  //           energy_cons: 341.64917
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1978,
  //           energy_cons: 382.7054
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1979,
  //           energy_cons: 441.15167
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1980,
  //           energy_cons: 454.03192
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1981,
  //           energy_cons: 475.33908
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1982,
  //           energy_cons: 475.5493
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1983,
  //           energy_cons: 517.0449
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1984,
  //           energy_cons: 564.71216
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1985,
  //           energy_cons: 624.16956
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1986,
  //           energy_cons: 700.47
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1987,
  //           energy_cons: 776.4874
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1988,
  //           energy_cons: 866.7034
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1989,
  //           energy_cons: 942.22174
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1990,
  //           energy_cons: 1066.0366
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1991,
  //           energy_cons: 1205.6149
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1992,
  //           energy_cons: 1359.7162
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1993,
  //           energy_cons: 1491.0803
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1994,
  //           energy_cons: 1607.975
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1995,
  //           energy_cons: 1756.9393
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1996,
  //           energy_cons: 1940.4343
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1997,
  //           energy_cons: 2131.1228
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1998,
  //           energy_cons: 1948.7238
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 1999,
  //           energy_cons: 2123.5676
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 2000,
  //           energy_cons: 2245.9128
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 2001,
  //           energy_cons: 2300.1194
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 2002,
  //           energy_cons: 2406.0903
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 2003,
  //           energy_cons: 2483.2976
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 2004,
  //           energy_cons: 2541.3552
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 2005,
  //           energy_cons: 2627.4595
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 2006,
  //           energy_cons: 2670.5813
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 2007,
  //           energy_cons: 2750.5283
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 2008,
  //           energy_cons: 2796.2139
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 2009,
  //           energy_cons: 2811.5908
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 2010,
  //           energy_cons: 3045.0989
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 2011,
  //           energy_cons: 3194.2815
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 2012,
  //           energy_cons: 3233.2668
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 2013,
  //           energy_cons: 3245.2783
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 2014,
  //           energy_cons: 3275.775
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 2015,
  //           energy_cons: 3332.7222
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 2016,
  //           energy_cons: 3429.4421
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 2017,
  //           energy_cons: 3467.6843
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 2018,
  //           energy_cons: 3521.1255
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 2019,
  //           energy_cons: 3475.339
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 2020,
  //           energy_cons: 3329.5415
  //         },
  //         {
  //           name: "South Korea",
  //           code: "KOR",
  //           year: 2021,
  //           energy_cons: 3493.2012
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1965,
  //           energy_cons: 337.40662
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1966,
  //           energy_cons: 381.80264
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1967,
  //           energy_cons: 411.5422
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1968,
  //           energy_cons: 433.01932
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1969,
  //           energy_cons: 490.20828
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1970,
  //           energy_cons: 528.76056
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1971,
  //           energy_cons: 582.2007
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1972,
  //           energy_cons: 629.5625
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1973,
  //           energy_cons: 689.2378
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1974,
  //           energy_cons: 717.36743
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1975,
  //           energy_cons: 736.829
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1976,
  //           energy_cons: 787.31866
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1977,
  //           energy_cons: 816.2599
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1978,
  //           energy_cons: 819.6292
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1979,
  //           energy_cons: 882.7518
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1980,
  //           energy_cons: 887.0162
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1981,
  //           energy_cons: 894.21735
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1982,
  //           energy_cons: 893.7999
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1983,
  //           energy_cons: 914.9736
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1984,
  //           energy_cons: 929.5847
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1985,
  //           energy_cons: 922.2829
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1986,
  //           energy_cons: 941.69214
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1987,
  //           energy_cons: 976.3617
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1988,
  //           energy_cons: 1019.78534
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1989,
  //           energy_cons: 1068.3877
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1990,
  //           energy_cons: 1068.7545
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1991,
  //           energy_cons: 1106.5186
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1992,
  //           energy_cons: 1159.128
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1993,
  //           energy_cons: 1121.5013
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1994,
  //           energy_cons: 1174.6917
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1995,
  //           energy_cons: 1219.4099
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1996,
  //           energy_cons: 1266.5682
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1997,
  //           energy_cons: 1336.4451
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1998,
  //           energy_cons: 1400.8822
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 1999,
  //           energy_cons: 1443.7037
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 2000,
  //           energy_cons: 1527.637
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 2001,
  //           energy_cons: 1597.8531
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 2002,
  //           energy_cons: 1615.0751
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 2003,
  //           energy_cons: 1706.8696
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 2004,
  //           energy_cons: 1769.3298
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 2005,
  //           energy_cons: 1781.4471
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 2006,
  //           energy_cons: 1807.2
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 2007,
  //           energy_cons: 1846.8264
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 2008,
  //           energy_cons: 1795.815
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 2009,
  //           energy_cons: 1664.8059
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 2010,
  //           energy_cons: 1709.8823
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 2011,
  //           energy_cons: 1677.6294
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 2012,
  //           energy_cons: 1668.326
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 2013,
  //           energy_cons: 1584.8909
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 2014,
  //           energy_cons: 1555.5511
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 2015,
  //           energy_cons: 1574.9623
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 2016,
  //           energy_cons: 1589.9742
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 2017,
  //           energy_cons: 1608.111
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 2018,
  //           energy_cons: 1637.0802
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 2019,
  //           energy_cons: 1591.3844
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 2020,
  //           energy_cons: 1439.4471
  //         },
  //         {
  //           name: "Spain",
  //           code: "ESP",
  //           year: 2021,
  //           energy_cons: 1553.2306
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1965,
  //           energy_cons: 10.453816
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1966,
  //           energy_cons: 10.781163
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1967,
  //           energy_cons: 11.0466795
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1968,
  //           energy_cons: 11.483015
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1969,
  //           energy_cons: 11.926896
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1970,
  //           energy_cons: 19.76358
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1971,
  //           energy_cons: 20.13109
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1972,
  //           energy_cons: 21.116488
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1973,
  //           energy_cons: 21.854218
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1974,
  //           energy_cons: 18.762318
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1975,
  //           energy_cons: 19.575474
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1976,
  //           energy_cons: 19.24833
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1977,
  //           energy_cons: 20.680182
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1978,
  //           energy_cons: 21.687885
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1979,
  //           energy_cons: 22.810078
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1980,
  //           energy_cons: 23.013426
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1981,
  //           energy_cons: 24.162786
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1982,
  //           energy_cons: 26.031103
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1983,
  //           energy_cons: 25.67312
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1984,
  //           energy_cons: 27.215025
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1985,
  //           energy_cons: 25.695911
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1986,
  //           energy_cons: 27.04742
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1987,
  //           energy_cons: 27.813168
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1988,
  //           energy_cons: 27.516165
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1989,
  //           energy_cons: 26.79549
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1990,
  //           energy_cons: 29.886992
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1991,
  //           energy_cons: 29.826563
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1992,
  //           energy_cons: 31.998472
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1993,
  //           energy_cons: 34.900856
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1994,
  //           energy_cons: 37.80947
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1995,
  //           energy_cons: 40.738228
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1996,
  //           energy_cons: 42.854855
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1997,
  //           energy_cons: 44.23366
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1998,
  //           energy_cons: 47.155613
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 1999,
  //           energy_cons: 50.71928
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 2000,
  //           energy_cons: 53.546623
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 2001,
  //           energy_cons: 52.03296
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 2002,
  //           energy_cons: 53.509136
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 2003,
  //           energy_cons: 55.06168
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 2004,
  //           energy_cons: 53.50688
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 2005,
  //           energy_cons: 61.786396
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 2006,
  //           energy_cons: 66.334045
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 2007,
  //           energy_cons: 67.44016
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 2008,
  //           energy_cons: 63.5758
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 2009,
  //           energy_cons: 64.45984
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 2010,
  //           energy_cons: 69.6159
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 2011,
  //           energy_cons: 75.57897
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 2012,
  //           energy_cons: 77.95245
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 2013,
  //           energy_cons: 79.214134
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 2014,
  //           energy_cons: 85.12164
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 2015,
  //           energy_cons: 95.5229
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 2016,
  //           energy_cons: 103.83532
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 2017,
  //           energy_cons: 101.81679
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 2018,
  //           energy_cons: 104.94932
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 2019,
  //           energy_cons: 108.16659
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 2020,
  //           energy_cons: 103.250275
  //         },
  //         {
  //           name: "Sri Lanka",
  //           code: "LKA",
  //           year: 2021,
  //           energy_cons: 106.21071
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1965,
  //           energy_cons: 392.95367
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1966,
  //           energy_cons: 419.03528
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1967,
  //           energy_cons: 429.21722
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1968,
  //           energy_cons: 458.35043
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1969,
  //           energy_cons: 458.3281
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1970,
  //           energy_cons: 486.52866
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1971,
  //           energy_cons: 495.3215
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1972,
  //           energy_cons: 510.2206
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1973,
  //           energy_cons: 539.84155
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1974,
  //           energy_cons: 499.54837
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1975,
  //           energy_cons: 529.47626
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1976,
  //           energy_cons: 562.74554
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1977,
  //           energy_cons: 555.36926
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1978,
  //           energy_cons: 645.84265
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1979,
  //           energy_cons: 681.1121
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1980,
  //           energy_cons: 641.0289
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1981,
  //           energy_cons: 636.0868
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1982,
  //           energy_cons: 604.89655
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1983,
  //           energy_cons: 601.3579
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1984,
  //           energy_cons: 636.6676
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1985,
  //           energy_cons: 691.6258
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1986,
  //           energy_cons: 716.90735
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1987,
  //           energy_cons: 701.8713
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1988,
  //           energy_cons: 685.92914
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1989,
  //           energy_cons: 670.8262
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1990,
  //           energy_cons: 682.3116
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1991,
  //           energy_cons: 647.09296
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1992,
  //           energy_cons: 651.9662
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1993,
  //           energy_cons: 644.95746
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1994,
  //           energy_cons: 645.0395
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1995,
  //           energy_cons: 652.4366
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1996,
  //           energy_cons: 633.9929
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1997,
  //           energy_cons: 656.35815
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1998,
  //           energy_cons: 710.3342
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 1999,
  //           energy_cons: 689.6719
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 2000,
  //           energy_cons: 639.4699
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 2001,
  //           energy_cons: 685.88873
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 2002,
  //           energy_cons: 642.0112
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 2003,
  //           energy_cons: 615.18054
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 2004,
  //           energy_cons: 662.64197
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 2005,
  //           energy_cons: 680.8416
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 2006,
  //           energy_cons: 639.8087
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 2007,
  //           energy_cons: 649.4543
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 2008,
  //           energy_cons: 639.42523
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 2009,
  //           energy_cons: 586.3839
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 2010,
  //           energy_cons: 621.6394
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 2011,
  //           energy_cons: 614.62695
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 2012,
  //           energy_cons: 652.4453
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 2013,
  //           energy_cons: 611.27637
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 2014,
  //           energy_cons: 608.4588
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 2015,
  //           energy_cons: 629.0021
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 2016,
  //           energy_cons: 617.6058
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 2017,
  //           energy_cons: 637.6044
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 2018,
  //           energy_cons: 624.6076
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 2019,
  //           energy_cons: 649.55347
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 2020,
  //           energy_cons: 618.2491
  //         },
  //         {
  //           name: "Sweden",
  //           code: "SWE",
  //           year: 2021,
  //           energy_cons: 634.4131
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1965,
  //           energy_cons: 182.4683
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1966,
  //           energy_cons: 196.10419
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1967,
  //           energy_cons: 209.44366
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1968,
  //           energy_cons: 219.98697
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1969,
  //           energy_cons: 227.56837
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1970,
  //           energy_cons: 249.06567
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1971,
  //           energy_cons: 254.86354
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1972,
  //           energy_cons: 251.06143
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1973,
  //           energy_cons: 277.651
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1974,
  //           energy_cons: 265.42792
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1975,
  //           energy_cons: 275.53973
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1976,
  //           energy_cons: 263.13712
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1977,
  //           energy_cons: 292.39398
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1978,
  //           energy_cons: 287.9896
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1979,
  //           energy_cons: 286.98972
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1980,
  //           energy_cons: 307.22653
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1981,
  //           energy_cons: 306.93976
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1982,
  //           energy_cons: 300.742
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1983,
  //           energy_cons: 312.75516
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1984,
  //           energy_cons: 303.02612
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1985,
  //           energy_cons: 323.7766
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1986,
  //           energy_cons: 339.8634
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1987,
  //           energy_cons: 337.86115
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1988,
  //           energy_cons: 340.43762
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1989,
  //           energy_cons: 318.1629
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1990,
  //           energy_cons: 331.6254
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1991,
  //           energy_cons: 340.5722
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1992,
  //           energy_cons: 346.05515
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1993,
  //           energy_cons: 345.47397
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1994,
  //           energy_cons: 362.9756
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1995,
  //           energy_cons: 343.99533
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1996,
  //           energy_cons: 332.291
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1997,
  //           energy_cons: 355.31625
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1998,
  //           energy_cons: 357.32562
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 1999,
  //           energy_cons: 373.4259
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 2000,
  //           energy_cons: 364.33627
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 2001,
  //           energy_cons: 389.12656
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 2002,
  //           energy_cons: 362.2444
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 2003,
  //           energy_cons: 358.35925
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 2004,
  //           energy_cons: 353.1598
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 2005,
  //           energy_cons: 338.78384
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 2006,
  //           energy_cons: 352.53745
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 2007,
  //           energy_cons: 348.59384
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 2008,
  //           energy_cons: 360.1892
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 2009,
  //           energy_cons: 359.15677
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 2010,
  //           energy_cons: 349.7803
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 2011,
  //           energy_cons: 332.0341
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 2012,
  //           energy_cons: 350.93008
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 2013,
  //           energy_cons: 360.04593
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 2014,
  //           energy_cons: 343.72827
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 2015,
  //           energy_cons: 336.09695
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 2016,
  //           energy_cons: 316.1205
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 2017,
  //           energy_cons: 316.84692
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 2018,
  //           energy_cons: 321.79495
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 2019,
  //           energy_cons: 335.7898
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 2020,
  //           energy_cons: 308.96707
  //         },
  //         {
  //           name: "Switzerland",
  //           code: "CHE",
  //           year: 2021,
  //           energy_cons: 298.30624
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1965,
  //           energy_cons: 70.35767
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1966,
  //           energy_cons: 75.37607
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1967,
  //           energy_cons: 82.26766
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1968,
  //           energy_cons: 94.5077
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1969,
  //           energy_cons: 98.922585
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1970,
  //           energy_cons: 107.678154
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1971,
  //           energy_cons: 135.22113
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1972,
  //           energy_cons: 144.47043
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1973,
  //           energy_cons: 168.83441
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1974,
  //           energy_cons: 161.68346
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1975,
  //           energy_cons: 178.1204
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1976,
  //           energy_cons: 216.8845
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1977,
  //           energy_cons: 238.00401
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1978,
  //           energy_cons: 281.16626
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1979,
  //           energy_cons: 298.47006
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1980,
  //           energy_cons: 314.66956
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1981,
  //           energy_cons: 294.6701
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1982,
  //           energy_cons: 329.01382
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1983,
  //           energy_cons: 363.93695
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1984,
  //           energy_cons: 379.65048
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1985,
  //           energy_cons: 397.3429
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1986,
  //           energy_cons: 432.42517
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1987,
  //           energy_cons: 468.09335
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1988,
  //           energy_cons: 517.0206
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1989,
  //           energy_cons: 548.73364
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1990,
  //           energy_cons: 584.57996
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1991,
  //           energy_cons: 618.12177
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1992,
  //           energy_cons: 656.75903
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1993,
  //           energy_cons: 694.72833
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1994,
  //           energy_cons: 737.2651
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1995,
  //           energy_cons: 783.6101
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1996,
  //           energy_cons: 816.115
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1997,
  //           energy_cons: 864.06116
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1998,
  //           energy_cons: 916.0468
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 1999,
  //           energy_cons: 958.3446
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 2000,
  //           energy_cons: 1022.31836
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 2001,
  //           energy_cons: 1054.9354
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 2002,
  //           energy_cons: 1096.7684
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 2003,
  //           energy_cons: 1146.0332
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 2004,
  //           energy_cons: 1194.2694
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 2005,
  //           energy_cons: 1210.2037
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 2006,
  //           energy_cons: 1242.178
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 2007,
  //           energy_cons: 1294.2858
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 2008,
  //           energy_cons: 1251.5388
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 2009,
  //           energy_cons: 1218.3159
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 2010,
  //           energy_cons: 1306.199
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 2011,
  //           energy_cons: 1296.7917
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 2012,
  //           energy_cons: 1288.0642
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 2013,
  //           energy_cons: 1315.6973
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 2014,
  //           energy_cons: 1344.9165
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 2015,
  //           energy_cons: 1343.6417
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 2016,
  //           energy_cons: 1352.6332
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 2017,
  //           energy_cons: 1350.6914
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 2018,
  //           energy_cons: 1369.06
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 2019,
  //           energy_cons: 1344.4702
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 2020,
  //           energy_cons: 1306.138
  //         },
  //         {
  //           name: "Taiwan",
  //           code: "TWN",
  //           year: 2021,
  //           energy_cons: 1382.773
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1965,
  //           energy_cons: 30.706528
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1966,
  //           energy_cons: 36.59365
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1967,
  //           energy_cons: 41.678394
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1968,
  //           energy_cons: 53.471695
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1969,
  //           energy_cons: 56.4744
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1970,
  //           energy_cons: 67.27355
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1971,
  //           energy_cons: 74.51701
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1972,
  //           energy_cons: 90.4268
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1973,
  //           energy_cons: 95.88781
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1974,
  //           energy_cons: 99.765045
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1975,
  //           energy_cons: 110.11729
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1976,
  //           energy_cons: 116.28432
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1977,
  //           energy_cons: 127.92271
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1978,
  //           energy_cons: 136.44252
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1979,
  //           energy_cons: 145.00728
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1980,
  //           energy_cons: 145.36143
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1981,
  //           energy_cons: 146.19788
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1982,
  //           energy_cons: 149.82246
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1983,
  //           energy_cons: 164.24889
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1984,
  //           energy_cons: 182.11613
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1985,
  //           energy_cons: 190.29178
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1986,
  //           energy_cons: 202.56573
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1987,
  //           energy_cons: 231.22543
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1988,
  //           energy_cons: 260.21817
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1989,
  //           energy_cons: 301.14996
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1990,
  //           energy_cons: 357.66293
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1991,
  //           energy_cons: 394.57697
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1992,
  //           energy_cons: 431.86475
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1993,
  //           energy_cons: 490.42926
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1994,
  //           energy_cons: 549.7717
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1995,
  //           energy_cons: 615.349
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1996,
  //           energy_cons: 696.35315
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1997,
  //           energy_cons: 732.5755
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1998,
  //           energy_cons: 674.9069
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 1999,
  //           energy_cons: 715.7346
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 2000,
  //           energy_cons: 741.95013
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 2001,
  //           energy_cons: 782.4773
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 2002,
  //           energy_cons: 848.2559
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 2003,
  //           energy_cons: 912.103
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 2004,
  //           energy_cons: 990.232
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 2005,
  //           energy_cons: 1021.6288
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 2006,
  //           energy_cons: 1043.4706
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 2007,
  //           energy_cons: 1089.5793
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 2008,
  //           energy_cons: 1104.9984
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 2009,
  //           energy_cons: 1147.0964
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 2010,
  //           energy_cons: 1222.3718
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 2011,
  //           energy_cons: 1253.7031
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 2012,
  //           energy_cons: 1342.7999
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 2013,
  //           energy_cons: 1350.0385
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 2014,
  //           energy_cons: 1392.3123
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 2015,
  //           energy_cons: 1423.4377
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 2016,
  //           energy_cons: 1452.4338
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 2017,
  //           energy_cons: 1478.0985
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 2018,
  //           energy_cons: 1523.2648
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 2019,
  //           energy_cons: 1523.9503
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 2020,
  //           energy_cons: 1408.2667
  //         },
  //         {
  //           name: "Thailand",
  //           code: "THA",
  //           year: 2021,
  //           energy_cons: 1419.349
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1965,
  //           energy_cons: 33.625652
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1966,
  //           energy_cons: 35.77738
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1967,
  //           energy_cons: 38.137833
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1968,
  //           energy_cons: 39.31429
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1969,
  //           energy_cons: 40.542286
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1970,
  //           energy_cons: 44.68058
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1971,
  //           energy_cons: 45.16016
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1972,
  //           energy_cons: 62.244137
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1973,
  //           energy_cons: 61.736767
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1974,
  //           energy_cons: 59.464718
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1975,
  //           energy_cons: 47.914722
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1976,
  //           energy_cons: 53.873497
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1977,
  //           energy_cons: 56.05023
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1978,
  //           energy_cons: 56.435577
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1979,
  //           energy_cons: 49.86362
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1980,
  //           energy_cons: 47.950253
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1981,
  //           energy_cons: 50.630768
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1982,
  //           energy_cons: 59.463615
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1983,
  //           energy_cons: 58.01731
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1984,
  //           energy_cons: 57.18679
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1985,
  //           energy_cons: 59.102222
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1986,
  //           energy_cons: 61.45136
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1987,
  //           energy_cons: 58.013767
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1988,
  //           energy_cons: 63.754013
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1989,
  //           energy_cons: 62.721416
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1990,
  //           energy_cons: 69.59995
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1991,
  //           energy_cons: 69.38886
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1992,
  //           energy_cons: 73.44645
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1993,
  //           energy_cons: 77.417534
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1994,
  //           energy_cons: 82.043274
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1995,
  //           energy_cons: 88.97196
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1996,
  //           energy_cons: 100.801254
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1997,
  //           energy_cons: 100.77518
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1998,
  //           energy_cons: 102.29102
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 1999,
  //           energy_cons: 113.68906
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 2000,
  //           energy_cons: 118.83542
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 2001,
  //           energy_cons: 128.22145
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 2002,
  //           energy_cons: 139.1399
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 2003,
  //           energy_cons: 155.99126
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 2004,
  //           energy_cons: 171.5493
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 2005,
  //           energy_cons: 183.93965
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 2006,
  //           energy_cons: 214.8384
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 2007,
  //           energy_cons: 221.53624
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 2008,
  //           energy_cons: 218.27826
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 2009,
  //           energy_cons: 216.46921
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 2010,
  //           energy_cons: 233.87024
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 2011,
  //           energy_cons: 229.67352
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 2012,
  //           energy_cons: 226.10043
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 2013,
  //           energy_cons: 230.29572
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 2014,
  //           energy_cons: 229.11217
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 2015,
  //           energy_cons: 222.30289
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 2016,
  //           energy_cons: 197.23303
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 2017,
  //           energy_cons: 209.28577
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 2018,
  //           energy_cons: 198.0932
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 2019,
  //           energy_cons: 193.07031
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 2020,
  //           energy_cons: 168.2924
  //         },
  //         {
  //           name: "Trinidad and Tobago",
  //           code: "TTO",
  //           year: 2021,
  //           energy_cons: 170.71414
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1965,
  //           energy_cons: 91.43334
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1966,
  //           energy_cons: 104.916214
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1967,
  //           energy_cons: 108.54361
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1968,
  //           energy_cons: 126.42663
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1969,
  //           energy_cons: 138.02687
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1970,
  //           energy_cons: 146.68285
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1971,
  //           energy_cons: 162.38358
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1972,
  //           energy_cons: 181.4259
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1973,
  //           energy_cons: 205.60278
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1974,
  //           energy_cons: 209.67642
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1975,
  //           energy_cons: 233.686
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1976,
  //           energy_cons: 263.19492
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1977,
  //           energy_cons: 288.08368
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1978,
  //           energy_cons: 304.5237
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1979,
  //           energy_cons: 287.2619
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1980,
  //           energy_cons: 298.49774
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1981,
  //           energy_cons: 301.18942
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1982,
  //           energy_cons: 328.68124
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1983,
  //           energy_cons: 339.71243
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1984,
  //           energy_cons: 357.70392
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1985,
  //           energy_cons: 386.09256
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1986,
  //           energy_cons: 420.70285
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1987,
  //           energy_cons: 479.59354
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1988,
  //           energy_cons: 527.38464
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1989,
  //           energy_cons: 517.6126
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1990,
  //           energy_cons: 561.9981
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1991,
  //           energy_cons: 573.7206
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1992,
  //           energy_cons: 603.29987
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1993,
  //           energy_cons: 655.675
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1994,
  //           energy_cons: 634.94763
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1995,
  //           energy_cons: 710.5756
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1996,
  //           energy_cons: 775.1066
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1997,
  //           energy_cons: 810.78394
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1998,
  //           energy_cons: 831.467
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 1999,
  //           energy_cons: 809.6106
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 2000,
  //           energy_cons: 864.6787
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 2001,
  //           energy_cons: 785.6305
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 2002,
  //           energy_cons: 859.633
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 2003,
  //           energy_cons: 910.2885
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 2004,
  //           energy_cons: 974.77924
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 2005,
  //           energy_cons: 996.7517
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 2006,
  //           energy_cons: 1105.833
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 2007,
  //           energy_cons: 1174.3561
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 2008,
  //           energy_cons: 1178.3445
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 2009,
  //           energy_cons: 1194.2681
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 2010,
  //           energy_cons: 1259.8208
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 2011,
  //           energy_cons: 1345.9695
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 2012,
  //           energy_cons: 1429.3923
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 2013,
  //           energy_cons: 1419.1321
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 2014,
  //           energy_cons: 1462.1481
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 2015,
  //           energy_cons: 1603.6588
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 2016,
  //           energy_cons: 1686.9373
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 2017,
  //           energy_cons: 1787.4014
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 2018,
  //           energy_cons: 1767.5957
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 2019,
  //           energy_cons: 1834.3484
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 2020,
  //           energy_cons: 1789.267
  //         },
  //         {
  //           name: "Turkey",
  //           code: "TUR",
  //           year: 2021,
  //           energy_cons: 1896.4607
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 1985,
  //           energy_cons: 143.10406
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 1986,
  //           energy_cons: 178.1074
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 1987,
  //           energy_cons: 177.18321
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 1988,
  //           energy_cons: 178.38301
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 1989,
  //           energy_cons: 183.29047
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 1990,
  //           energy_cons: 151.8917
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 1991,
  //           energy_cons: 155.99084
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 1992,
  //           energy_cons: 148.97125
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 1993,
  //           energy_cons: 122.293106
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 1994,
  //           energy_cons: 130.45369
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 1995,
  //           energy_cons: 107.38004
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 1996,
  //           energy_cons: 156.40971
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 1997,
  //           energy_cons: 119.7694
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 1998,
  //           energy_cons: 149.13548
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 1999,
  //           energy_cons: 142.35695
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 2000,
  //           energy_cons: 119.82038
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 2001,
  //           energy_cons: 151.23706
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 2002,
  //           energy_cons: 127.56533
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 2003,
  //           energy_cons: 176.11882
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 2004,
  //           energy_cons: 174.40666
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 2005,
  //           energy_cons: 176.60062
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 2006,
  //           energy_cons: 178.46283
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 2007,
  //           energy_cons: 173.17245
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 2008,
  //           energy_cons: 142.05565
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 2009,
  //           energy_cons: 231.60123
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 2010,
  //           energy_cons: 249.56628
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 2011,
  //           energy_cons: 276.99832
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 2012,
  //           energy_cons: 301.96558
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 2013,
  //           energy_cons: 268.24536
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 2014,
  //           energy_cons: 278.03848
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 2015,
  //           energy_cons: 332.82343
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 2016,
  //           energy_cons: 329.54184
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 2017,
  //           energy_cons: 326.10327
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 2018,
  //           energy_cons: 363.03943
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 2019,
  //           energy_cons: 394.78546
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 2020,
  //           energy_cons: 371.9919
  //         },
  //         {
  //           name: "Turkmenistan",
  //           code: "TKM",
  //           year: 2021,
  //           energy_cons: 445.81168
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 1985,
  //           energy_cons: 2780.6597
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 1986,
  //           energy_cons: 2792.9468
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 1987,
  //           energy_cons: 2852.486
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 1988,
  //           energy_cons: 2855.3506
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 1989,
  //           energy_cons: 2732.057
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 1990,
  //           energy_cons: 3194.6973
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 1991,
  //           energy_cons: 2994.568
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 1992,
  //           energy_cons: 2530.553
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 1993,
  //           energy_cons: 2218.2783
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 1994,
  //           energy_cons: 1895.8518
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 1995,
  //           energy_cons: 1849.7552
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 1996,
  //           energy_cons: 1724.0723
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 1997,
  //           energy_cons: 1662.8889
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 1998,
  //           energy_cons: 1604.654
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 1999,
  //           energy_cons: 1580.5836
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 2000,
  //           energy_cons: 1585.4565
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 2001,
  //           energy_cons: 1562.9004
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 2002,
  //           energy_cons: 1553.2378
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 2003,
  //           energy_cons: 1591.9277
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 2004,
  //           energy_cons: 1585.8718
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 2005,
  //           energy_cons: 1605.4927
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 2006,
  //           energy_cons: 1624.4312
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 2007,
  //           energy_cons: 1617.8816
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 2008,
  //           energy_cons: 1562.0527
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 2009,
  //           energy_cons: 1330.5576
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 2010,
  //           energy_cons: 1426.9147
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 2011,
  //           energy_cons: 1474.7444
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 2012,
  //           energy_cons: 1442.9894
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 2013,
  //           energy_cons: 1369.5685
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 2014,
  //           energy_cons: 1208.3707
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 2015,
  //           energy_cons: 1003.4079
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 2016,
  //           energy_cons: 1049.9954
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 2017,
  //           energy_cons: 975.3309
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 2018,
  //           energy_cons: 1011.9886
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 2019,
  //           energy_cons: 957.66315
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 2020,
  //           energy_cons: 918.0856
  //         },
  //         {
  //           name: "Ukraine",
  //           code: "UKR",
  //           year: 2021,
  //           energy_cons: 926.3145
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1965,
  //           energy_cons: 0.8545331
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1966,
  //           energy_cons: 0.9120411
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1967,
  //           energy_cons: 5.406756
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1968,
  //           energy_cons: 6.944713
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1969,
  //           energy_cons: 6.9689255
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1970,
  //           energy_cons: 9.605591
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1971,
  //           energy_cons: 14.638031
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1972,
  //           energy_cons: 15.65015
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1973,
  //           energy_cons: 20.293112
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1974,
  //           energy_cons: 22.295511
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1975,
  //           energy_cons: 23.85921
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1976,
  //           energy_cons: 30.190237
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1977,
  //           energy_cons: 49.6315
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1978,
  //           energy_cons: 57.500813
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1979,
  //           energy_cons: 67.56039
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1980,
  //           energy_cons: 108.15642
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1981,
  //           energy_cons: 125.92837
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1982,
  //           energy_cons: 135.96599
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1983,
  //           energy_cons: 130.51527
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1984,
  //           energy_cons: 162.54678
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1985,
  //           energy_cons: 201.63353
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1986,
  //           energy_cons: 244.38722
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1987,
  //           energy_cons: 273.0771
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1988,
  //           energy_cons: 301.8825
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1989,
  //           energy_cons: 340.16495
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1990,
  //           energy_cons: 344.9527
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1991,
  //           energy_cons: 420.83743
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1992,
  //           energy_cons: 406.69568
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1993,
  //           energy_cons: 423.47037
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1994,
  //           energy_cons: 464.67413
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1995,
  //           energy_cons: 484.871
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1996,
  //           energy_cons: 499.68793
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1997,
  //           energy_cons: 521.4564
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1998,
  //           energy_cons: 534.11285
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 1999,
  //           energy_cons: 538.36896
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 2000,
  //           energy_cons: 535.7819
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 2001,
  //           energy_cons: 541.56604
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 2002,
  //           energy_cons: 591.6931
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 2003,
  //           energy_cons: 631.1553
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 2004,
  //           energy_cons: 675.06537
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 2005,
  //           energy_cons: 704.5981
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 2006,
  //           energy_cons: 741.29297
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 2007,
  //           energy_cons: 818.3611
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 2008,
  //           energy_cons: 938.4005
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 2009,
  //           energy_cons: 925.57526
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 2010,
  //           energy_cons: 972.4917
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 2011,
  //           energy_cons: 1020.93134
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 2012,
  //           energy_cons: 1074.0997
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 2013,
  //           energy_cons: 1133.245
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 2014,
  //           energy_cons: 1121.7177
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 2015,
  //           energy_cons: 1230.9631
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 2016,
  //           energy_cons: 1284.301
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 2017,
  //           energy_cons: 1288.7795
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 2018,
  //           energy_cons: 1271.7272
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 2019,
  //           energy_cons: 1263.322
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 2020,
  //           energy_cons: 1183.1406
  //         },
  //         {
  //           name: "United Arab Emirates",
  //           code: "ARE",
  //           year: 2021,
  //           energy_cons: 1257.898
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1965,
  //           energy_cons: 2316.2246
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1966,
  //           energy_cons: 2327.5
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1967,
  //           energy_cons: 2328.214
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1968,
  //           energy_cons: 2411.4243
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1969,
  //           energy_cons: 2498.7305
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1970,
  //           energy_cons: 2551.043
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1971,
  //           energy_cons: 2503.8496
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1972,
  //           energy_cons: 2540.6985
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1973,
  //           energy_cons: 2667.0833
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1974,
  //           energy_cons: 2533.1792
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1975,
  //           energy_cons: 2388.2493
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1976,
  //           energy_cons: 2437.3584
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1977,
  //           energy_cons: 2482.9485
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1978,
  //           energy_cons: 2497.1929
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1979,
  //           energy_cons: 2614.0388
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1980,
  //           energy_cons: 2381.1255
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1981,
  //           energy_cons: 2315.192
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1982,
  //           energy_cons: 2285.1692
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1983,
  //           energy_cons: 2294.409
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1984,
  //           energy_cons: 2293.4163
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1985,
  //           energy_cons: 2390.7266
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1986,
  //           energy_cons: 2457.0557
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1987,
  //           energy_cons: 2452.9358
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1988,
  //           energy_cons: 2485.6873
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1989,
  //           energy_cons: 2488.6924
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1990,
  //           energy_cons: 2508.3936
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1991,
  //           energy_cons: 2561.2168
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1992,
  //           energy_cons: 2545.3274
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1993,
  //           energy_cons: 2574.725
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1994,
  //           energy_cons: 2543.823
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1995,
  //           energy_cons: 2552.5452
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1996,
  //           energy_cons: 2676.295
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1997,
  //           energy_cons: 2629.9988
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1998,
  //           energy_cons: 2658.1606
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 1999,
  //           energy_cons: 2644.8433
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 2000,
  //           energy_cons: 2664.4966
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 2001,
  //           energy_cons: 2689.6152
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 2002,
  //           energy_cons: 2632.163
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 2003,
  //           energy_cons: 2673.9204
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 2004,
  //           energy_cons: 2688.2712
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 2005,
  //           energy_cons: 2718.5632
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 2006,
  //           energy_cons: 2685.4065
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 2007,
  //           energy_cons: 2605.1782
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 2008,
  //           energy_cons: 2557.6836
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 2009,
  //           energy_cons: 2432.2246
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 2010,
  //           energy_cons: 2489.4019
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 2011,
  //           energy_cons: 2356.0586
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 2012,
  //           energy_cons: 2385.4973
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 2013,
  //           energy_cons: 2377.2146
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 2014,
  //           energy_cons: 2244.6433
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 2015,
  //           energy_cons: 2276.8586
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 2016,
  //           energy_cons: 2252.7917
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 2017,
  //           energy_cons: 2247.0615
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 2018,
  //           energy_cons: 2237.6284
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 2019,
  //           energy_cons: 2185.3584
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 2020,
  //           energy_cons: 1961.1682
  //         },
  //         {
  //           name: "United Kingdom",
  //           code: "GBR",
  //           year: 2021,
  //           energy_cons: 1994.2782
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1965,
  //           energy_cons: 14439.701
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1966,
  //           energy_cons: 15247.363
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1967,
  //           energy_cons: 15778.539
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1968,
  //           energy_cons: 16719.385
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1969,
  //           energy_cons: 17583.424
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1970,
  //           energy_cons: 18205.84
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1971,
  //           energy_cons: 18589.008
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1972,
  //           energy_cons: 19514.082
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1973,
  //           energy_cons: 20339.795
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1974,
  //           energy_cons: 19842.607
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1975,
  //           energy_cons: 19319.482
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1976,
  //           energy_cons: 20376.51
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1977,
  //           energy_cons: 20895.646
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1978,
  //           energy_cons: 21359.291
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1979,
  //           energy_cons: 21584.4
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1980,
  //           energy_cons: 20751.959
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1981,
  //           energy_cons: 20138.094
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1982,
  //           energy_cons: 19318.14
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1983,
  //           energy_cons: 19250.531
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1984,
  //           energy_cons: 20235.69
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1985,
  //           energy_cons: 20184.244
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1986,
  //           energy_cons: 20371.967
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1987,
  //           energy_cons: 21056.053
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1988,
  //           energy_cons: 22014.887
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1989,
  //           energy_cons: 22548.133
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1990,
  //           energy_cons: 22606.613
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1991,
  //           energy_cons: 22576.31
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1992,
  //           energy_cons: 22909.344
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1993,
  //           energy_cons: 23390.023
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1994,
  //           energy_cons: 23820.389
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1995,
  //           energy_cons: 24340.916
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1996,
  //           energy_cons: 25161.398
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1997,
  //           energy_cons: 25350.254
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1998,
  //           energy_cons: 25512.498
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 1999,
  //           energy_cons: 25965.105
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 2000,
  //           energy_cons: 26545.426
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 2001,
  //           energy_cons: 25912.781
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 2002,
  //           energy_cons: 26297.848
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 2003,
  //           energy_cons: 26380.111
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 2004,
  //           energy_cons: 26897.549
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 2005,
  //           energy_cons: 26910.133
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 2006,
  //           energy_cons: 26698.12
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 2007,
  //           energy_cons: 27063.787
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 2008,
  //           energy_cons: 26405.516
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 2009,
  //           energy_cons: 25105.531
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 2010,
  //           energy_cons: 25951.865
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 2011,
  //           energy_cons: 25726.064
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 2012,
  //           energy_cons: 25047.865
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 2013,
  //           energy_cons: 25727.75
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 2014,
  //           energy_cons: 25996.219
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 2015,
  //           energy_cons: 25747.033
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 2016,
  //           energy_cons: 25723.152
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 2017,
  //           energy_cons: 25819.031
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 2018,
  //           energy_cons: 26762.473
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 2019,
  //           energy_cons: 26571.66
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 2020,
  //           energy_cons: 24593.223
  //         },
  //         {
  //           name: "United States",
  //           code: "USA",
  //           year: 2021,
  //           energy_cons: 25825.46
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 1985,
  //           energy_cons: 467.03375
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 1986,
  //           energy_cons: 458.06946
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 1987,
  //           energy_cons: 477.01334
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 1988,
  //           energy_cons: 479.89438
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 1989,
  //           energy_cons: 496.45374
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 1990,
  //           energy_cons: 520.9085
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 1991,
  //           energy_cons: 514.6644
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 1992,
  //           energy_cons: 487.91968
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 1993,
  //           energy_cons: 524.773
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 1994,
  //           energy_cons: 514.86487
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 1995,
  //           energy_cons: 508.38867
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 1996,
  //           energy_cons: 524.4696
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 1997,
  //           energy_cons: 518.98584
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 1998,
  //           energy_cons: 518.0096
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 1999,
  //           energy_cons: 587.1983
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 2000,
  //           energy_cons: 599.5481
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 2001,
  //           energy_cons: 601.5353
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 2002,
  //           energy_cons: 616.7473
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 2003,
  //           energy_cons: 565.4481
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 2004,
  //           energy_cons: 563.67334
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 2005,
  //           energy_cons: 562.5887
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 2006,
  //           energy_cons: 526.855
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 2007,
  //           energy_cons: 564.3034
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 2008,
  //           energy_cons: 529.1841
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 2009,
  //           energy_cons: 525.1383
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 2010,
  //           energy_cons: 531.19763
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 2011,
  //           energy_cons: 558.96436
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 2012,
  //           energy_cons: 543.0735
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 2013,
  //           energy_cons: 545.3506
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 2014,
  //           energy_cons: 563.8251
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 2015,
  //           energy_cons: 538.10376
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 2016,
  //           energy_cons: 515.04285
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 2017,
  //           energy_cons: 531.6735
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 2018,
  //           energy_cons: 533.6701
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 2019,
  //           energy_cons: 534.6436
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 2020,
  //           energy_cons: 521.0134
  //         },
  //         {
  //           name: "Uzbekistan",
  //           code: "UZB",
  //           year: 2021,
  //           energy_cons: 546.7998
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1965,
  //           energy_cons: 191.48479
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1966,
  //           energy_cons: 193.30673
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1967,
  //           energy_cons: 203.81584
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1968,
  //           energy_cons: 219.9329
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1969,
  //           energy_cons: 222.37321
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1970,
  //           energy_cons: 224.47539
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1971,
  //           energy_cons: 228.21188
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1972,
  //           energy_cons: 241.24176
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1973,
  //           energy_cons: 276.01712
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1974,
  //           energy_cons: 285.5238
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1975,
  //           energy_cons: 296.9489
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1976,
  //           energy_cons: 324.69083
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1977,
  //           energy_cons: 361.8607
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1978,
  //           energy_cons: 369.74844
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1979,
  //           energy_cons: 407.6538
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1980,
  //           energy_cons: 456.2239
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1981,
  //           energy_cons: 473.2821
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1982,
  //           energy_cons: 482.6744
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1983,
  //           energy_cons: 480.96634
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1984,
  //           energy_cons: 490.4139
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1985,
  //           energy_cons: 503.77292
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1986,
  //           energy_cons: 541.2463
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1987,
  //           energy_cons: 540.817
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1988,
  //           energy_cons: 563.32416
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1989,
  //           energy_cons: 568.06134
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1990,
  //           energy_cons: 603.5548
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1991,
  //           energy_cons: 607.6413
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1992,
  //           energy_cons: 657.6146
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1993,
  //           energy_cons: 650.6573
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1994,
  //           energy_cons: 706.32837
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1995,
  //           energy_cons: 727.39716
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1996,
  //           energy_cons: 708.8626
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1997,
  //           energy_cons: 749.3556
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1998,
  //           energy_cons: 794.73016
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 1999,
  //           energy_cons: 795.3734
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 2000,
  //           energy_cons: 818.3177
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 2001,
  //           energy_cons: 850.19543
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 2002,
  //           energy_cons: 860.09015
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 2003,
  //           energy_cons: 803.77734
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 2004,
  //           energy_cons: 873.0132
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 2005,
  //           energy_cons: 899.72815
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 2006,
  //           energy_cons: 949.324
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 2007,
  //           energy_cons: 1002.80023
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 2008,
  //           energy_cons: 984.1453
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 2009,
  //           energy_cons: 981.8452
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 2010,
  //           energy_cons: 946.35175
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 2011,
  //           energy_cons: 969.91223
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 2012,
  //           energy_cons: 1015.11127
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 2013,
  //           energy_cons: 1023.7578
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 2014,
  //           energy_cons: 982.8331
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 2015,
  //           energy_cons: 969.1747
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 2016,
  //           energy_cons: 843.6044
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 2017,
  //           energy_cons: 850.9625
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 2018,
  //           energy_cons: 699.5123
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 2019,
  //           energy_cons: 580.3936
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 2020,
  //           energy_cons: 534.83575
  //         },
  //         {
  //           name: "Venezuela",
  //           code: "VEN",
  //           year: 2021,
  //           energy_cons: 564.3148
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1965,
  //           energy_cons: 29.454964
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1966,
  //           energy_cons: 51.48185
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1967,
  //           energy_cons: 70.94084
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1968,
  //           energy_cons: 73.566086
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1969,
  //           energy_cons: 86.89018
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1970,
  //           energy_cons: 90.64347
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1971,
  //           energy_cons: 80.82477
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1972,
  //           energy_cons: 78.33445
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1973,
  //           energy_cons: 82.677025
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1974,
  //           energy_cons: 61.490173
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1975,
  //           energy_cons: 68.35067
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1976,
  //           energy_cons: 39.566593
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1977,
  //           energy_cons: 42.325066
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1978,
  //           energy_cons: 43.90517
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1979,
  //           energy_cons: 47.3169
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1980,
  //           energy_cons: 54.149826
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1981,
  //           energy_cons: 54.274437
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1982,
  //           energy_cons: 57.97133
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1983,
  //           energy_cons: 60.601913
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1984,
  //           energy_cons: 61.137714
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1985,
  //           energy_cons: 61.650707
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1986,
  //           energy_cons: 66.83211
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1987,
  //           energy_cons: 75.24842
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1988,
  //           energy_cons: 75.216125
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1989,
  //           energy_cons: 71.687004
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1990,
  //           energy_cons: 77.12803
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1991,
  //           energy_cons: 78.51418
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1992,
  //           energy_cons: 85.7928
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1993,
  //           energy_cons: 97.9724
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1994,
  //           energy_cons: 109.445335
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1995,
  //           energy_cons: 127.15272
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1996,
  //           energy_cons: 145.77272
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1997,
  //           energy_cons: 167.91832
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1998,
  //           energy_cons: 181.61017
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 1999,
  //           energy_cons: 188.04898
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 2000,
  //           energy_cons: 214.14896
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 2001,
  //           energy_cons: 242.04488
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 2002,
  //           energy_cons: 264.75528
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 2003,
  //           energy_cons: 285.3287
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 2004,
  //           energy_cons: 347.77457
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 2005,
  //           energy_cons: 369.79126
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 2006,
  //           energy_cons: 338.96823
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 2007,
  //           energy_cons: 370.27386
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 2008,
  //           energy_cons: 457.2086
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 2009,
  //           energy_cons: 467.72537
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 2010,
  //           energy_cons: 540.2252
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 2011,
  //           energy_cons: 597.14197
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 2012,
  //           energy_cons: 626.2369
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 2013,
  //           energy_cons: 661.5924
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 2014,
  //           energy_cons: 731.5774
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 2015,
  //           energy_cons: 832.2893
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 2016,
  //           energy_cons: 899.5286
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 2017,
  //           energy_cons: 967.94366
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 2018,
  //           energy_cons: 1086.1477
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 2019,
  //           energy_cons: 1205.4047
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 2020,
  //           energy_cons: 1172.9674
  //         },
  //         {
  //           name: "Vietnam",
  //           code: "VNM",
  //           year: 2021,
  //           energy_cons: 1199.9425
  //         }
  //         ]
  //     })
  //     console.log({countryData})

  //     const developerData = await prisma.devInfo.createMany({
  //       data: [
  //         { name: 'Sebastian Ling',
  //           age: 17, 
  //           duties: 'Backend/prisma developer',
  //           ImageURL: 'URLexample'
  //         },
  //         { name: 'Viktor Ramic Simic',
  //           age: 17, 
  //           duties: 'Backend/prisma developer',
  //           ImageURL: 'URLexample'
  //         },
  //         { name: 'Olle Thor',
  //           age: 17, 
  //           duties: 'Backend/prisma developer',
  //           ImageURL: 'URLexample'
  //         },
  //         { name: 'Cecilia Ek',
  //           age: 17, 
  //           duties: 'Frontend developer/designer',
  //           ImageURL: 'URLexample'
  //         },
  //         { name: 'Emilia Romberg',
  //           age: 17, 
  //           duties: 'Frontend developer/designer',
  //           ImageURL: 'URLexample'
  //         },
  //       ],
  //     })

  //     console.log(developerData)


  }

  main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
