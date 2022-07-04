const { Router } = require("express");
const { Product, Category,Op, Brand } = require("../../db");
const router = Router();

router.get("/filter", async (req, res, next) => {
  let { brand, category, min, max, name } = req.query;

  try {
    if(!name){
      const products = await Product.findAll();
      let allProduct = products;
  
      if (!brand) {
        if (category !== "all") {
          allProduct = [];
  
          products.forEach((p) => {
            if (category === p.category[0]) {
              allProduct.push(p);
            }
          });
  
          if (min || max) {
            const rangeProduct = [];
            if (min && max) {
              if (min > max) {
                allProduct.forEach((p) => {
                  if (p.price <= min && p.price >= max) {
                    rangeProduct.push(p);
                  }
                });
              } 
                allProduct.forEach((p) => {
                  if (p.price >= min && p.price <= max) {
                    rangeProduct.push(p);
                  }
                });
              
  
              res.send(rangeProduct);
            } else {
              if (min) {
                allProduct.forEach((p) => {
                  if (p.price >= min) {
                    rangeProduct.push(p);
                  }
                });
                res.send(rangeProduct);
              } else {
                allProduct.forEach((p) => {
                  if (p.price >= max) {
                    rangeProduct.push(p);
                  }
                });
                res.send(rangeProduct);
              }
            }
          }
  
          res.send(allProduct);
        } else {
          if (min || max) {
            const rangeProduct = [];
  
            if (min && max) {
              if (min > max) {
                allProduct.forEach((p) => {
                  if (p.price <= min && p.price >= max) {
                    rangeProduct.push(p);
                  }
                });
              } 
                allProduct.forEach((p) => {
                  if (p.price >= min && p.price <= max) {
                    rangeProduct.push(p);
                  }
                });
              
              res.send(rangeProduct);
            } else {
              if (min) {
                allProduct.forEach((p) => {
                  if (p.price >= min) {
                    rangeProduct.push(p);
                  }
                });
                res.send("2");
              } else {
                allProduct.forEach((p) => {
                  if (p.price >= max) {
                    rangeProduct.push(p);
                  }
                });
                res.send("3");
              }
            }
          }
  
          res.send(allProduct);
        }
      } else {
        if (brand !== "all") {
          allProduct = [];
          if (category !== "all") {
            products.forEach((p) => {
              if (category === p.category[0] && brand === p.brand) {
                allProduct.push(p);
              }
            });
          } else {
            products.forEach((p) => {
              if (brand === p.brand) {
                allProduct.push(p);
              }
            });
          }
  
          if (min || max) {
            const rangeProduct = [];
            if (min && max) {
              if (min > max) {
                allProduct.forEach((p) => {
                  if (p.price <= min && p.price >= max) {
                    rangeProduct.push(p);
                  }
                });
              }
              allProduct.forEach((p) => {
                if (p.price >= min && p.price <= max) {
                  rangeProduct.push(p);
                }
              });
              res.send(rangeProduct);
            } else {
              if (min) {
                allProduct.forEach((p) => {
                  if (p.price >= min) {
                    rangeProduct.push(p);
                  }
                });
                res.send(rangeProduct);
              } else {
                allProduct.forEach((p) => {
                  if (p.price >= max) {
                    rangeProduct.push(p);
                  }
                });
                res.send(rangeProduct);
              }
            }
          }
  
          res.send(allProduct);
        } else {
          allProduct = [];
          if (category !== "all") {
            products.forEach((p) => {
              if (category === p.category[0]) {
                allProduct.push(p);
              }
            });
          }
  
          if (min || max) {
            const rangeProduct = [];
            if (min && max) {
              if (min > max) {
                allProduct.forEach((p) => {
                  if (p.price <= min && p.price >= max) {
                    rangeProduct.push(p);
                  }
                });
              }
              allProduct.forEach((p) => {
                if (p.price >= min && p.price <= max) {
                  rangeProduct.push(p);
                }
              });
              res.send(rangeProduct);
            } else {
              if (min) {
                allProduct.forEach((p) => {
                  if (p.price >= min) {
                    rangeProduct.push(p);
                  }
                });
                res.send(rangeProduct);
              } else {
                allProduct.forEach((p) => {
                  if (p.price >= max) {
                    rangeProduct.push(p);
                  }
                });
                res.send(rangeProduct);
              }
            }
          }
  
          res.send(allProduct);
        }
      }
    }else{
      const response = await Product.findAll({
        where: {
          name: { [Op.iLike]: `%${name}%` },
        },
      });

      if(brand && brand !== 'all'){
        const searchBrand = []
        response.forEach(p=>{
          if(p.brand.includes(brand)){
            return searchBrand.push(p)
          }
        })

        res.send(searchBrand)
      }else{
        if (response.length > 0) {
          res.send(response);
        } else {
          res.status(404).send('Not product found');
        }
      }
    }

  } catch (error) {
    next(error);
  }
});

// router.get("/filter/", async (req, res, next) => {
//   const { brand, category, min, max } = req.query;
//   try {
//     const products = await Product.findAll();
//     let allProduct = products

//     if (category === "all" && brand === "all") {
//       if (min || max) {
//         const rangeProduct = [];
//         if (min && max) {
//           if (min < max) {
//             allProduct.forEach((p) => {
//               if (p.price >= min && p.price <= max) {
//                 rangeProduct.push(p);
//               }
//             });
//           }
//           if (max < min) {
//             allProduct.forEach((p) => {
//               if (p.price >= max && p.price <= min) {
//                 rangeProduct.push(p);
//               }
//             });
//           }
//           return res.send(rangeProduct);
//         }
//         if (min) {
//           allProduct.forEach((p) => {
//             if (p.price > min) {
//               rangeProduct.push(p);
//             }
//           });
//           return res.send(rangeProduct);
//         }
//         if (max) {
//           allProduct.forEach((p) => {
//             if (p.price > max) {
//               rangeProduct.push(p);
//             }
//           });
//           return res.send(rangeProduct);
//         }
//       }
//       res.status(201).send(allProduct);
//     }
//     if (category && category !== "all" && brand && brand !== "all") {
//       const filterCatBrand = [];

//               allProduct.forEach((p) => {
//         const cat = p.category[0];
//         const bran = p.brand;
//         if (cat === category && bran === brand) {
//           filterCatBrand.push(p);
//         }
//       });

//       if (min || max) {
//         const rangeProduct = [];
//         if (min && max) {
//           if (min < max) {
//             filterCatBrand.forEach((p) => {
//               if (p.price >= min && p.price <= max) {
//                 rangeProduct.push(p);
//               }
//             });
//           }
//           if (max < min) {
//             filterCatBrand.forEach((p) => {
//               if (p.price >= max && p.price <= min) {
//                 rangeProduct.push(p);
//               }
//             });
//           }
//           return res.send(rangeProduct);
//         }
//         if (min) {
//           filterCatBrand.forEach((p) => {
//             if (p.price > min) {
//               rangeProduct.push(p);
//             }
//           });
//           return res.send(rangeProduct);
//         }
//         if (max) {
//           filterCatBrand.forEach((p) => {
//             if (p.price > max) {
//               rangeProduct.push(p);
//             }
//           });
//           return res.send(rangeProduct);
//         }
//       }

//       res.status(201).send(filterCatBrand);
//     }
//     if (category === "all" && brand) {
//       const allBrand = [];

//       allProduct.forEach((p) => {
//         if (brand === p.brand) {
//           allBrand.push(p);
//         }
//       });

//       if (min || max) {
//         const rangeProduct = [];
//         if (min && max) {
//           if (min < max) {
//             allBrand.forEach((p) => {
//               if (p.price >= min && p.price <= max) {
//                 rangeProduct.push(p);
//               }
//             });
//           }
//           if (max < min) {
//             allBrand.forEach((p) => {
//               if (p.price >= max && p.price <= min) {
//                 rangeProduct.push(p);
//               }
//             });
//           }
//           return res.send(rangeProduct);
//         }
//         if (min) {
//             allBrand.forEach((p) => {
//             if (p.price > min) {
//               rangeProduct.push(p);
//             }
//           });
//           return res.send(rangeProduct);
//         }
//         if (max) {
//             allBrand.forEach((p) => {
//             if (p.price > max) {
//               rangeProduct.push(p);
//             }
//           });
//           return res.send(rangeProduct);
//         }
//       }

//       res.status(201).send(allBrand);
//     }
//     if (category && category !== "all" && brand === undefined) {
//       const filterCat = [];

//       allProduct.forEach((p) => {
//         const cat = p.category[0];
//         if (cat === category) {
//           filterCat.push(p);
//         }
//       });

//       if (min || max) {
//         const rangeProduct = [];
//         if (min && max) {
//           if (min < max) {
//             filterCat.forEach((p) => {
//               if (p.price >= min && p.price <= max) {
//                 rangeProduct.push(p);
//               }
//             });
//           }
//           if (max < min) {
//             filterCat.forEach((p) => {
//               if (p.price >= max && p.price <= min) {
//                 rangeProduct.push(p);
//               }
//             });
//           }
//           return res.send(rangeProduct);
//         }
//         if (min) {
//             filterCat.forEach((p) => {
//             if (p.price > min) {
//               rangeProduct.push(p);
//             }
//           });
//           return res.send(rangeProduct);
//         }
//         if (max) {
//             filterCat.forEach((p) => {
//             if (p.price > max) {
//               rangeProduct.push(p);
//             }
//           });
//           return res.send(rangeProduct);
//         }
//       }

//       res.status(201).send(filterCat);
//     }
//     if (category !== "all" && brand === "all") {
//       const filterCat = [];

//       allProduct.forEach((p) => {
//         const cat = p.category[0];
//         if (cat === category) {
//           filterCat.push(p);
//         }
//       });

//       if (min || max) {
//         const rangeProduct = [];
//         if (min && max) {
//           if (min < max) {
//             filterCat.forEach((p) => {
//               if (p.price >= min && p.price <= max) {
//                 rangeProduct.push(p);
//               }
//             });
//           }
//           if (max < min) {
//             filterCat.forEach((p) => {
//               if (p.price >= max && p.price <= min) {
//                 rangeProduct.push(p);
//               }
//             });
//           }
//           return res.send(rangeProduct);
//         }
//         if (min) {
//             filterCat.forEach((p) => {
//             if (p.price > min) {
//               rangeProduct.push(p);
//             }
//           });
//           return res.send(rangeProduct);
//         }
//         if (max) {
//             filterCat.forEach((p) => {
//             if (p.price > max) {
//               rangeProduct.push(p);
//             }
//           });
//           return res.send(rangeProduct);
//         }
//       }

//       res.status(201).send(filterCat);
//     }
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
