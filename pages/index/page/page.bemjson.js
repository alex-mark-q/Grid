module.exports = {
    block: 'page',
    head: [{
        elem: 'css',
        url: 'index.css'
    }],
    content: [{
        elem: 'body',
        content: [{
                block: 'fluid',
                content: [{
                    elem: 'row',
                    mix: {
                        block: 'fluid',
                        elem: 'centered'
                    },
                    content: [{
                        block: 'topic',
                        content: [{
                            block: 'header',
                            mix: {
                                block: 'header',
                                elem: 'h1'
                            },
                            content: 'Grid Post One'
                        }]
                    }, {
                        elem: 'sm-middle',
                        mix: {
                            block: 'grid',
                            elem: 'elem'
                        },
                        content: [{
                            block: 'topic',
                            content: [{
                                block: 'header',
                                mix: {
                                    block: 'header',
                                    elem: 'h2'
                                },
                                content: 'Latest Post'
                            }]
                        }, {
                            block: 'option',
                            content: [{
                                block: 'content',
                                mix: {
                                    block: 'option',
                                    elem: 'text'
                                },
                                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                            }]
                        }, {
                            block: 'link',
                            mods: {
                                icon: 'star',
                                theme: 'islands',
                                size: 'm',
                                disabled: true
                            },
                            url: 'https://bem.info/',
                            content: 'Read Full Story'
                        }]
                    }, {
                        elem: 'sm-middle',
                        mix: {
                            block: 'grid',
                            elem: 'elem'
                        },
                        content: [{
                            block: 'topic',
                            content: [{
                                block: 'header',
                                mix: {
                                    block: 'header',
                                    elem: 'h2'
                                },
                                content: 'Latest Post'
                            }]
                        }, {
                            block: 'option',
                            content: [{
                                block: 'content',
                                mix: {
                                    block: 'option',
                                    elem: 'text'
                                },
                                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                            }]
                        }, {
                            block: 'link',
                            mods: {
                                icon: 'star-r',
                                theme: 'islands',
                                size: 'm',
                                disabled: true
                            },
                            url: 'https://bem.info/',
                            content: 'Read Full Story'
                        }]
                    }, {
                        elem: 'sm-middle',
                        mix: {
                            block: 'grid',
                            elem: 'elem'
                        },
                        content: [{
                            block: 'topic',
                            content: [{
                                block: 'header',
                                mix: {
                                    block: 'header',
                                    elem: 'h2'
                                },
                                content: 'Latest Post'
                            }]
                        }, {
                            block: 'option',
                            content: [{
                                block: 'content',
                                mix: {
                                    block: 'option',
                                    elem: 'text'
                                },
                                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                            }]
                        }, {
                            block: 'link',
                            mods: {
                                icon: 'right',
                                theme: 'islands',
                                size: 'm',
                                disabled: true
                            },
                            url: 'https://bem.info/',
                            content: 'Read Full Story'
                        }]
                    }]
                }]
            }, {
                block: 'fluid',
                content: [{
                    elem: 'row',
                    mix: {
                        block: 'fluid',
                        elem: 'centered'
                    },
                    content: [{
                        block: 'topic',
                        content: [{
                            block: 'header',
                            mix: {
                                block: 'header',
                                elem: 'h1'
                            },
                            content: 'Grid Post Two'
                        }]
                    }, {
                        elem: 'md-middle',
                        content: [{
                            block: 'wrap',
                            mix: {
                                block: 'fluid',
                                elem: 'wrap'
                            },
                            content: [{
                                block: 'topic',
                                content: [{
                                    block: 'header',
                                    mix: {
                                        block: 'header',
                                        elem: 'h2'
                                    },
                                    content: 'Latest Post'
                                }]
                            }, {
                                block: 'option',
                                content: [{
                                    block: 'content',
                                    mix: {
                                        block: 'option',
                                        elem: 'text'
                                    },
                                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                }]
                            }, {
                                block: 'spacer'
                            }, {
                                block: 'link',
                                mods: {
                                    icon: 'star',
                                    theme: 'islands',
                                    size: 'm',
                                    disabled: true
                                },
                                url: 'https://bem.info/',
                                content: 'Read Full Story'
                            }]
                        }]
                    }, {
                        elem: 'md-middle',
                        content: [{
                            block: 'wrap',
                            mix: {
                                block: 'fluid',
                                elem: 'wrap'
                            },
                            content: [{
                                block: 'topic',
                                content: [{
                                    block: 'header',
                                    mix: {
                                        block: 'header',
                                        elem: 'h2'
                                    },
                                    content: 'Latest Post'
                                }]
                            }, {
                                block: 'option',
                                content: [{
                                    block: 'content',
                                    mix: {
                                        block: 'option',
                                        elem: 'text'
                                    },
                                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                }]
                            }, {
                                block: 'spacer'
                            }, {
                                block: 'link',
                                mods: {
                                    icon: 'star-r',
                                    theme: 'islands',
                                    size: 'm',
                                    disabled: true
                                },
                                url: 'https://bem.info/',
                                content: 'Read Full Story'
                            }]
                        }]
                    }, {
                        elem: 'md-middle',
                        content: [{
                            block: 'wrap',
                            mix: {
                                block: 'fluid',
                                elem: 'wrap'
                            },
                            content: [{
                                block: 'topic',
                                content: [{
                                    block: 'header',
                                    mix: {
                                        block: 'header',
                                        elem: 'h2'
                                    },
                                    content: 'Latest Post'
                                }]
                            }, {
                                block: 'option',
                                content: [{
                                    block: 'content',
                                    mix: {
                                        block: 'option',
                                        elem: 'text'
                                    },
                                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                }]
                            }, {
                                block: 'spacer'
                            }, {
                                block: 'link',
                                mods: {
                                    icon: 'right',
                                    theme: 'islands',
                                    size: 'm',
                                    disabled: true
                                },
                                url: 'https://bem.info/',
                                content: 'Read Full Story'
                            }]
                        }]
                    }]
                }]
            }
            // ,{
            //     block: 'container',
            //     content: [{
            //         block: 'row',
            //         content: [{
            //                 block: 'topic',
            //                 content: [{
            //                     block: 'header',
            //                     mix: {
            //                         block: 'header',
            //                         elem: 'h1'
            //                     },
            //                     content: 'Latest Post'
            //                 }]
            //             },
            //             {
            //                 block: 'grid',
            //                 content: [{
            //                     elem: 'wrap',
            //                     content: [{
            //                         elem: 'wd-middle',
            //                         mix: {
            //                             block: 'grid',
            //                             elem: 'elem'
            //                         },
            //                         content: [{
            //                             block: 'topic',
            //                             content: [{
            //                                 block: 'header',
            //                                 mix: {
            //                                     block: 'header',
            //                                     elem: 'h2'
            //                                 },
            //                                 content: 'Latest Post'
            //                             }]
            //                         }, {
            //                             block: 'option',
            //                             content: [{
            //                                 block: 'content',
            //                                 mix: {
            //                                     block: 'option',
            //                                     elem: 'text'
            //                                 },
            //                                 content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            //                             }]
            //                         }, {
            //                             block: 'link',
            //                             mods: {
            //                                 icon: 'star',
            //                                 theme: 'islands',
            //                                 size: 'm',
            //                                 disabled: true
            //                             },
            //                             url: 'https://bem.info/',
            //                             content: 'Read Full Story'
            //                         }]
            //                     }, {
            //                         elem: 'wd-middle',
            //                         mix: {
            //                             block: 'grid',
            //                             elem: 'elem'
            //                         },
            //                         content: [{
            //                             block: 'topic',
            //                             content: [{
            //                                 block: 'header',
            //                                 mix: {
            //                                     block: 'header',
            //                                     elem: 'h2'
            //                                 },
            //                                 content: 'Latest Post'
            //                             }]
            //                         }, {
            //                             block: 'option',
            //                             content: [{
            //                                 block: 'content',
            //                                 mix: {
            //                                     block: 'option',
            //                                     elem: 'text'
            //                                 },
            //                                 content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            //                             }]
            //                         }, {
            //                             block: 'link',
            //                             mods: {
            //                                 icon: 'star-r',
            //                                 theme: 'islands',
            //                                 size: 'm',
            //                                 disabled: true
            //                             },
            //                             url: 'https://bem.info/',
            //                             content: 'Read Full Story'
            //                         }]
            //                     }, {
            //                         elem: 'wd-middle',
            //                         mix: {
            //                             block: 'grid',
            //                             elem: 'elem'
            //                         },
            //                         content: [{
            //                             block: 'topic',
            //                             content: [{
            //                                 block: 'header',
            //                                 mix: {
            //                                     block: 'header',
            //                                     elem: 'h2'
            //                                 },
            //                                 content: 'Latest Post'
            //                             }]
            //                         }, {
            //                             block: 'option',
            //                             content: [{
            //                                 block: 'content',
            //                                 mix: {
            //                                     block: 'option',
            //                                     elem: 'text'
            //                                 },
            //                                 content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            //                             }]
            //                         }, {
            //                             block: 'link',
            //                             mods: {
            //                                 icon: 'right',
            //                                 theme: 'islands',
            //                                 size: 'm',
            //                                 disabled: true
            //                             },
            //                             url: 'https://bem.info/',
            //                             content: 'Read Full Story'
            //                         }]
            //                     }]
            //                 }]
            //             }
            //         ]
            //     }]
            // }
            , {
                block: 'border'
            }, {
                content: [{
                    block: 'fluid',
                    content: [{
                        elem: 'row',
                        mix: {
                            block: 'fluid',
                            elem: 'centered'
                        },
                        content: [{
                            block: 'topic',
                            content: [{
                                block: 'header',
                                mix: {
                                    block: 'header',
                                    elem: 'h1'
                                },
                                content: 'Blog'
                            }]
                        }, {
                            elem: 'md-middle',
                            content: [{
                                block: 'wrap',
                                mix: {
                                    block: 'fluid',
                                    elem: 'wrap'
                                },
                                mods: {
                                    bgc: 'color'
                                },
                                content: [{
                                    block: 'blog',
                                    mods: {
                                        user: 'post'
                                    },
                                    content: [{
                                        elem: 'image'
                                    }]
                                }, {
                                    block: 'wrap',
                                    mix: {
                                        block: 'wrap',
                                        elem: 'pdn'
                                    },
                                    content: [{
                                        block: 'option',
                                        content: [{
                                            elem: 'wrap',
                                            content: [{
                                                elem: 'date',
                                                content: '11 Apr 2019'
                                            }, {
                                                elem: 'content',
                                                content: 'Lorem Ipsum is simply dummy'
                                            }, {
                                                elem: 'description',
                                                content: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
                                            }]
                                        }]
                                    }, {
                                        block: 'menu',
                                        content: [{
                                            elem: 'item',
                                            content: [{
                                                elem: 'image',
                                                mods: {
                                                    img: 'comment'
                                                }
                                            }, {
                                                elem: 'text',
                                                content: '123'
                                            }]
                                        }, {
                                            elem: 'item',
                                            content: [{
                                                elem: 'image',
                                                mods: {
                                                    img: 'view'
                                                }
                                            }, {
                                                elem: 'text',
                                                content: '4567'
                                            }]
                                        }, {
                                            elem: 'item',
                                            mods: {
                                                custom: 'right'
                                            },
                                            content: [{
                                                elem: 'image',
                                                mods: {
                                                    img: 'link'
                                                }
                                            }]
                                        }]
                                    }]
                                }]
                            }]
                        }, {
                            elem: 'md-middle',
                            content: [{
                                block: 'wrap',
                                mix: {
                                    block: 'fluid',
                                    elem: 'wrap'
                                },
                                mods: {
                                    bgc: 'color'
                                },
                                content: [{
                                    block: 'blog',
                                    mods: {
                                        user: 'post'
                                    },
                                    content: [{
                                        elem: 'image'
                                    }]
                                }, {
                                    block: 'wrap',
                                    mix: {
                                        block: 'wrap',
                                        elem: 'pdn'
                                    },
                                    content: [{
                                        block: 'option',
                                        content: [{
                                            elem: 'wrap',
                                            content: [{
                                                elem: 'date',
                                                content: '11 Apr 2019'
                                            }, {
                                                elem: 'content',
                                                content: 'Lorem Ipsum is simply dummy'
                                            }, {
                                                elem: 'description',
                                                content: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
                                            }]
                                        }]
                                    }, {
                                        block: 'menu',
                                        content: [{
                                            elem: 'item',
                                            content: [{
                                                elem: 'image',
                                                mods: {
                                                    img: 'comment'
                                                }
                                            }, {
                                                elem: 'text',
                                                content: '123'
                                            }]
                                        }, {
                                            elem: 'item',
                                            content: [{
                                                elem: 'image',
                                                mods: {
                                                    img: 'view'
                                                }
                                            }, {
                                                elem: 'text',
                                                content: '4567'
                                            }]
                                        }, {
                                            elem: 'item',
                                            mods: {
                                                custom: 'right'
                                            },
                                            content: [{
                                                elem: 'image',
                                                mods: {
                                                    img: 'link'
                                                }
                                            }]
                                        }]
                                    }]
                                }]
                            }]
                        }, {
                            elem: 'md-middle',
                            content: [{
                                block: 'wrap',
                                mix: {
                                    block: 'fluid',
                                    elem: 'wrap'
                                },
                                mods: {
                                    bgc: 'color'
                                },
                                content: [{
                                    block: 'blog',
                                    mods: {
                                        user: 'post'
                                    },
                                    content: [{
                                        elem: 'image'
                                    }]
                                }, {
                                    block: 'wrap',
                                    mix: {
                                        block: 'wrap',
                                        elem: 'pdn'
                                    },
                                    content: [{
                                        block: 'option',
                                        content: [{
                                            elem: 'wrap',
                                            content: [{
                                                elem: 'date',
                                                content: '11 Apr 2019'
                                            }, {
                                                elem: 'content',
                                                content: 'Lorem Ipsum is simply dummy'
                                            }, {
                                                elem: 'description',
                                                content: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
                                            }]
                                        }]
                                    }, {
                                        block: 'menu',
                                        content: [{
                                            elem: 'item',
                                            content: [{
                                                elem: 'image',
                                                mods: {
                                                    img: 'comment'
                                                }
                                            }, {
                                                elem: 'text',
                                                content: '123'
                                            }]
                                        }, {
                                            elem: 'item',
                                            content: [{
                                                elem: 'image',
                                                mods: {
                                                    img: 'view'
                                                }
                                            }, {
                                                elem: 'text',
                                                content: '4567'
                                            }]
                                        }, {
                                            elem: 'item',
                                            mods: {
                                                custom: 'right'
                                            },
                                            content: [{
                                                elem: 'image',
                                                mods: {
                                                    img: 'link'
                                                }
                                            }]
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
            }, {
                content: [{
                    block: 'fluid',
                    content: [{
                        elem: 'row',
                        content: [{
                            block: 'topic',
                            content: [{
                                block: 'header',
                                mix: {
                                    block: 'header',
                                    elem: 'h1'
                                },
                                content: 'Blog'
                            }]
                        }, {
                            elem: 'md-middle',
                            content: [{
                                block: 'wrap',
                                mix: {
                                    block: 'wrap',
                                    elem: 'pdn'
                                },
                                content: [{
                                    block: 'blog',
                                    mix: {
                                        block: 'blog',
                                        elem: 'wrap'
                                    },
                                    content: [{
                                        block: 'option',
                                        content: [{
                                            elem: 'header',
                                            content: [{
                                                content: 'Tag One'
                                            }]

                                        }]
                                    }, {
                                        block: 'spacer'
                                    }, {
                                        block: 'option',
                                        content: [{
                                            elem: 'wrap',
                                            content: [{
                                                elem: 'content',
                                                content: 'Lorem Ipsum is simply dummy'
                                            }, {
                                                elem: 'date',
                                                content: '11 Apr 2019'
                                            }]
                                        }]
                                    }, {
                                        block: 'spacer'
                                    }, {
                                        block: 'option',
                                        mods: {
                                            custom: 'bottom'
                                        },
                                        content: [{
                                            elem: 'user',
                                            content: [{
                                                elem: 'image'
                                            }, {
                                                block: 'menu-v',
                                                content: [{
                                                    elem: 'item',
                                                    content: 'Author One'
                                                }, {
                                                    elem: 'item',
                                                    content: 'Position'
                                                }]
                                            }]
                                        }]
                                    }]
                                }]
                            }]
                        }, {
                            elem: 'md-middle',
                            content: [{
                                block: 'wrap',
                                mix: {
                                    block: 'wrap',
                                    elem: 'pdn'
                                },
                                content: [{
                                    block: 'blog',
                                    mix: {
                                        block: 'blog',
                                        elem: 'wrap'
                                    },
                                    content: [{
                                        block: 'option',
                                        content: [{
                                            elem: 'header',
                                            content: [{
                                                content: 'Tag One'
                                            }]

                                        }]
                                    }, {
                                        block: 'spacer'
                                    }, {
                                        block: 'option',
                                        content: [{
                                            elem: 'wrap',
                                            content: [{
                                                elem: 'content',
                                                content: 'Lorem Ipsum is simply dummy'
                                            }, {
                                                elem: 'date',
                                                content: '11 Apr 2019'
                                            }]
                                        }]
                                    }, {
                                        block: 'spacer'
                                    }, {
                                        block: 'option',
                                        mods: {
                                            custom: 'bottom'
                                        },
                                        content: [{
                                            elem: 'user',
                                            content: [{
                                                elem: 'image'
                                            }, {
                                                block: 'menu-v',
                                                content: [{
                                                    elem: 'item',
                                                    content: 'Author One'
                                                }, {
                                                    elem: 'item',
                                                    content: 'Position'
                                                }]
                                            }]
                                        }]
                                    }]
                                }]
                            }]
                        }, {
                            elem: 'md-middle',
                            content: [{
                                block: 'wrap',
                                mix: {
                                    block: 'wrap',
                                    elem: 'pdn'
                                },
                                content: [{
                                    block: 'blog',
                                    mix: {
                                        block: 'blog',
                                        elem: 'wrap'
                                    },
                                    content: [{
                                        block: 'option',
                                        content: [{
                                            elem: 'header',
                                            content: [{
                                                content: 'Tag One'
                                            }]

                                        }]
                                    }, {
                                        block: 'spacer'
                                    }, {
                                        block: 'option',
                                        content: [{
                                            elem: 'wrap',
                                            content: [{
                                                elem: 'content',
                                                content: 'Lorem Ipsum is simply dummy'
                                            }, {
                                                elem: 'date',
                                                content: '11 Apr 2019'
                                            }]
                                        }]
                                    }, {
                                        block: 'spacer'
                                    }, {
                                        block: 'option',
                                        mods: {
                                            custom: 'bottom'
                                        },
                                        content: [{
                                            elem: 'user',
                                            content: [{
                                                elem: 'image'
                                            }, {
                                                block: 'menu-v',
                                                content: [{
                                                    elem: 'item',
                                                    content: 'Author One'
                                                }, {
                                                    elem: 'item',
                                                    content: 'Position'
                                                }]
                                            }]
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
            },

            // {
            //     block: 'container',
            //     content: [{
            //         block: 'topic',
            //         content: [{
            //             block: 'header',
            //             mix: {
            //                 block: 'header',
            //                 elem: 'h1'
            //             },
            //             content: 'Blog'
            //         }]
            //     }, {
            //         block: 'grid',
            //         content: [{
            //             elem: 'wrap',
            //             content: [{
            //                 elem: 'wd-middle',
            //                 elemMods: {
            //                     custom: 'user'
            //                 },
            //                 mix: {
            //                     block: 'grid',
            //                     elem: 'elem'
            //                 },
            //                 content: [{
            //                     block: 'blog',
            //                     mods: {
            //                         user: 'post'
            //                     },
            //                     content: [{
            //                         elem: 'image'
            //                     }]
            //                 }, {
            //                     block: 'option',
            //                     content: [{
            //                         elem: 'wrap',
            //                         content: [{
            //                             elem: 'date',
            //                             content: '11 Apr 2019'
            //                         }, {
            //                             elem: 'header',
            //                             content: 'Lorem Ipsum is simply dummy'
            //                         }, {
            //                             elem: 'description',
            //                             content: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
            //                         }]
            //                     }]
            //                 }, {
            //                     block: 'menu',
            //                     content: [{
            //                         elem: 'item',
            //                         content: [{
            //                             elem: 'image',
            //                             mods: {
            //                                 img: 'comment'
            //                             }
            //                         }, {
            //                             elem: 'text',
            //                             content: '123'
            //                         }]
            //                     }, {
            //                         elem: 'item',
            //                         content: [{
            //                             elem: 'image',
            //                             mods: {
            //                                 img: 'view'
            //                             }
            //                         }, {
            //                             elem: 'text',
            //                             content: '4567'
            //                         }]
            //                     }, {
            //                         elem: 'item',
            //                         mods: {
            //                             custom: 'right'
            //                         },
            //                         content: [{
            //                             elem: 'image',
            //                             mods: {
            //                                 img: 'link'
            //                             }
            //                         }]
            //                     }]
            //                 }]
            //             }, {
            //                 elem: 'wd-middle',
            //                 elemMods: {
            //                     custom: 'user'
            //                 },
            //                 mix: {
            //                     block: 'grid',
            //                     elem: 'elem'
            //                 },
            //                 content: [{
            //                     block: 'blog',
            //                     mods: {
            //                         user: 'post'
            //                     },
            //                     content: [{
            //                         elem: 'image'
            //                     }]
            //                 }, {
            //                     block: 'option',
            //                     content: [{
            //                         elem: 'wrap',
            //                         content: [{
            //                             elem: 'date',
            //                             content: '11 Apr 2019'
            //                         }, {
            //                             elem: 'header',
            //                             content: 'Lorem Ipsum is simply dummy'
            //                         }, {
            //                             elem: 'description',
            //                             content: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
            //                         }]
            //                     }]
            //                 }, {
            //                     block: 'menu',
            //                     content: [{
            //                         elem: 'item',
            //                         content: [{
            //                             elem: 'image',
            //                             mods: {
            //                                 img: 'comment'
            //                             }
            //                         }, {
            //                             elem: 'text',
            //                             content: '123'
            //                         }]
            //                     }, {
            //                         elem: 'item',
            //                         content: [{
            //                             elem: 'image',
            //                             mods: {
            //                                 img: 'view'
            //                             }
            //                         }, {
            //                             elem: 'text',
            //                             content: '4567'
            //                         }]
            //                     }, {
            //                         elem: 'item',
            //                         mods: {
            //                             custom: 'right'
            //                         },
            //                         content: [{
            //                             elem: 'image',
            //                             mods: {
            //                                 img: 'link'
            //                             }
            //                         }]
            //                     }]
            //                 }]
            //             }, {
            //                 elem: 'wd-middle',
            //                 elemMods: {
            //                     custom: 'user'
            //                 },
            //                 mix: {
            //                     block: 'grid',
            //                     elem: 'elem'
            //                 },
            //                 content: [{
            //                     block: 'blog',
            //                     mods: {
            //                         user: 'post'
            //                     },
            //                     content: [{
            //                         elem: 'image'
            //                     }]
            //                 }, {
            //                     block: 'option',
            //                     content: [{
            //                         elem: 'wrap',
            //                         content: [{
            //                             elem: 'date',
            //                             content: '11 Apr 2019'
            //                         }, {
            //                             elem: 'header',
            //                             content: 'Lorem Ipsum is simply dummy'
            //                         }, {
            //                             elem: 'description',
            //                             content: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
            //                         }]
            //                     }]
            //                 }, {
            //                     block: 'menu',
            //                     content: [{
            //                         elem: 'item',
            //                         content: [{
            //                             elem: 'image',
            //                             mods: {
            //                                 img: 'comment'
            //                             }
            //                         }, {
            //                             elem: 'text',
            //                             content: '123'
            //                         }]
            //                     }, {
            //                         elem: 'item',
            //                         content: [{
            //                             elem: 'image',
            //                             mods: {
            //                                 img: 'view'
            //                             }
            //                         }, {
            //                             elem: 'text',
            //                             content: '4567'
            //                         }]
            //                     }, {
            //                         elem: 'item',
            //                         mods: {
            //                             custom: 'right'
            //                         },
            //                         content: [{
            //                             elem: 'image',
            //                             mods: {
            //                                 img: 'link'
            //                             }
            //                         }]
            //                     }]
            //                 }]
            //             }]
            //         }]
            //     }]
            // },

            {
                block: 'border'
            },

            // {
            //     block: 'container',
            //     content: [{
            //         block: 'row',
            //         content: [{
            //             block: 'topic',
            //             content: [{
            //                 block: 'header',
            //                 mix: {
            //                     block: 'header',
            //                     elem: 'h1'
            //                 },
            //                 content: 'Blog'
            //             }]
            //         }, {
            //             block: 'grid',
            //             content: [{
            //                 elem: 'wrap',
            //                 mods: {
            //                     custom: 'mrg'
            //                 },
            //                 content: [{
            //                     elem: 'wd-middle',
            //                     elemMods: {
            //                         custom: 'usr'
            //                     },
            //                     mix: {
            //                         block: 'grid',
            //                         elem: 'elem'
            //                     },
            //                     content: [{
            //                         block: 'option',
            //                         content: [{
            //                             elem: 'header',
            //                             content: [{
            //                                 content: 'Tag One'
            //                             }]

            //                         }]
            //                     }, {
            //                         block: 'option',
            //                         content: [{
            //                             elem: 'wrap',
            //                             content: [{
            //                                 elem: 'content',
            //                                 content: 'Lorem Ipsum is simply dummy'
            //                             }, {
            //                                 elem: 'date',
            //                                 content: '11 Apr 2019'
            //                             }]
            //                         }]
            //                     }, {
            //                         block: 'spacer'
            //                     }, {
            //                         block: 'option',
            //                         mods: {
            //                             custom: 'bottom'
            //                         },
            //                         content: [{
            //                             elem: 'user',
            //                             content: [{
            //                                 elem: 'image'
            //                             }, {
            //                                 block: 'menu-v',
            //                                 content: [{
            //                                     elem: 'item',
            //                                     content: 'Author One'
            //                                 }, {
            //                                     elem: 'item',
            //                                     content: 'Position'
            //                                 }]
            //                             }]
            //                         }]
            //                     }]
            //                 }, {
            //                     elem: 'wd-middle',
            //                     elemMods: {
            //                         custom: 'usr'
            //                     },
            //                     mix: {
            //                         block: 'grid',
            //                         elem: 'elem'
            //                     },
            //                     content: [{
            //                         block: 'option',
            //                         content: [{
            //                             elem: 'header',
            //                             content: [{
            //                                 content: 'Tag One'
            //                             }]

            //                         }]
            //                     }, {
            //                         block: 'option',
            //                         content: [{
            //                             elem: 'wrap',
            //                             content: [{
            //                                 elem: 'content',
            //                                 content: 'Lorem Ipsum is simply dummy'
            //                             }, {
            //                                 elem: 'date',
            //                                 content: '11 Apr 2019'
            //                             }]
            //                         }]
            //                     }, {
            //                         block: 'spacer'
            //                     }, {
            //                         block: 'option',
            //                         mods: {
            //                             custom: 'bottom'
            //                         },
            //                         content: [{
            //                             elem: 'user',
            //                             content: [{
            //                                 elem: 'image'
            //                             }, {
            //                                 block: 'menu-v',
            //                                 content: [{
            //                                     elem: 'item',
            //                                     content: 'Author One'
            //                                 }, {
            //                                     elem: 'item',
            //                                     content: 'Position'
            //                                 }]
            //                             }]
            //                         }]
            //                     }]
            //                 }, {
            //                     elem: 'wd-middle',
            //                     elemMods: {
            //                         custom: 'usr'
            //                     },
            //                     mix: {
            //                         block: 'grid',
            //                         elem: 'elem'
            //                     },
            //                     content: [{
            //                         block: 'option',
            //                         content: [{
            //                             elem: 'header',
            //                             content: [{
            //                                 content: 'Tag One'
            //                             }]

            //                         }]
            //                     }, {
            //                         block: 'option',
            //                         content: [{
            //                             elem: 'wrap',
            //                             content: [{
            //                                 elem: 'content',
            //                                 content: 'Lorem Ipsum is simply dummy'
            //                             }, {
            //                                 elem: 'date',
            //                                 content: '11 Apr 2019'
            //                             }]
            //                         }]
            //                     }, {
            //                         block: 'spacer'
            //                     }, {
            //                         block: 'option',
            //                         mods: {
            //                             custom: 'bottom'
            //                         },
            //                         content: [{
            //                             elem: 'user',
            //                             content: [{
            //                                 elem: 'image'
            //                             }, {
            //                                 block: 'menu-v',
            //                                 content: [{
            //                                     elem: 'item',
            //                                     content: 'Author One'
            //                                 }, {
            //                                     elem: 'item',
            //                                     content: 'Position'
            //                                 }]
            //                             }]
            //                         }]
            //                     }]
            //                 }]
            //             }]
            //         }]
            //     }]
            // },
            {
                content: [{
                    block: 'fluid',
                    content: [{
                        elem: 'row',
                        mix: {
                            block: 'fluid',
                            elem: 'centered'
                        },
                        content: [{
                            block: 'topic',
                            content: [{
                                block: 'header',
                                mix: {
                                    block: 'header',
                                    elem: 'h1'
                                },
                                content: 'Blog'
                            }]
                        }, {
                            elem: 'md-big',
                            content: [{
                                block: 'wrap',
                                mix: {
                                    block: 'fluid',
                                    elem: 'wrap-big'
                                },
                                content: [{
                                    block: 'wrap',
                                    mix: {
                                        block: 'wrap',
                                        elem: 'pdn-big'
                                    },
                                    content: [{
                                        block: 'option',
                                        mix: {
                                            block: 'option',
                                            elem: 'footer'
                                        },
                                        content: [{
                                            elem: 'user',
                                            content: [{
                                                elem: 'image'
                                            }, {
                                                block: 'menu-v',
                                                content: [{
                                                    elem: 'item',
                                                    content: 'Author One'
                                                }]
                                            }]
                                        }]
                                    }, {
                                        block: 'option',
                                        mix: {
                                            block: 'option',
                                            elem: 'description'
                                        },
                                        content: 'Contrary to popular belief, Lorem Ipsum is not simply random text.Contrary to popular belief, Lorem Ipsum is not simply random text.Contrary to popular belief, Lorem Ipsum is not simply random text.'
                                    }, {
                                        block: 'link',
                                        mix: {
                                            block: 'blog',
                                            elem: 'link'
                                        },
                                        mods: {
                                            icon: 'star',
                                            theme: 'islands',
                                            size: 'm',
                                            disabled: true
                                        },
                                        url: 'https://bem.info/',
                                        content: 'Read Full Story'
                                    }]
                                }]

                            }]
                        }, {
                            elem: 'md-big',
                            mods: {
                                bgc: 'color'
                            },
                            content: [{
                                block: 'wrap',
                                mix: {
                                    block: 'fluid',
                                    elem: 'wrap-big'
                                },
                                content: [{
                                    block: 'wrap',
                                    mix: {
                                        block: 'wrap',
                                        elem: 'pdn-big'
                                    },
                                    content: [{
                                        block: 'blog',
                                        mods: {
                                            user: 'author'
                                        },
                                        content: [{
                                            elem: 'image'
                                        }]
                                    }, {
                                        block: 'option',
                                        content: [{
                                            elem: 'wrap',
                                            content: [{
                                                elem: 'date',
                                                content: '11 Apr 2019'
                                            }, {
                                                elem: 'content',
                                                content: 'Lorem Ipsum is simply dummy'
                                            }]
                                        }]
                                    }, {
                                        block: 'option',
                                        mix: {
                                            block: 'option',
                                            elem: 'footer'
                                        },
                                        content: [{
                                            elem: 'user',
                                            content: [{
                                                elem: 'image'
                                            }, {
                                                block: 'menu-v',
                                                content: [{
                                                    elem: 'item',
                                                    content: 'Author One'
                                                }]
                                            }]
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
            },

            // {
            //     block: 'container',
            //     content: [{
            //         block: 'row',
            //         content: [{
            //             block: 'topic',
            //             content: [{
            //                 block: 'header',
            //                 mix: {
            //                     block: 'header',
            //                     elem: 'h1'
            //                 },
            //                 content: 'Blog'
            //             }]
            //         }, {
            //             block: 'grid',
            //             content: [{
            //                 elem: 'wrap',
            //                 content: [{
            //                     elem: 'wd-big',
            //                     mix: {
            //                         block: 'grid',
            //                         elem: 'elem'
            //                     },
            //                     content: [{
            //                         block: 'option',
            //                         mix: {
            //                             block: 'option',
            //                             elem: 'footer'
            //                         },
            //                         content: [{
            //                             elem: 'user',
            //                             content: [{
            //                                 elem: 'image'
            //                             }, {
            //                                 block: 'menu-v',
            //                                 content: [{
            //                                     elem: 'item',
            //                                     content: 'Author One'
            //                                 }]
            //                             }]
            //                         }]
            //                     }, {
            //                         block: 'option',
            //                         mix: {
            //                             block: 'option',
            //                             elem: 'description'
            //                         },
            //                         content: 'Contrary to popular belief, Lorem Ipsum is not simply random text.Contrary to popular belief, Lorem Ipsum is not simply random text.Contrary to popular belief, Lorem Ipsum is not simply random text.'
            //                     }, {
            //                         block: 'link',
            //                         mix: {
            //                             block: 'option',
            //                             elem: 'link'
            //                         },
            //                         mods: {
            //                             icon: 'star',
            //                             theme: 'islands',
            //                             size: 'm',
            //                             disabled: true
            //                         },
            //                         url: 'https://bem.info/',
            //                         content: 'Read Full Story'
            //                     }]
            //                 }, {
            //                     elem: 'wd-big',
            //                     mix: {
            //                         block: 'grid',
            //                         elem: 'elem'
            //                     },
            //                     content: [{
            //                         block: 'blog',
            //                         mods: {
            //                             user: 'author'
            //                         },
            //                         content: [{
            //                             elem: 'image'
            //                         }]
            //                     }, {
            //                         block: 'option',
            //                         content: [{
            //                             elem: 'wrap',
            //                             content: [{
            //                                 elem: 'date',
            //                                 content: '11 Apr 2019'
            //                             }, {
            //                                 elem: 'content',
            //                                 content: 'Lorem Ipsum is simply dummy'
            //                             }]
            //                         }]
            //                     }, {
            //                         block: 'option',
            //                         mix: {
            //                             block: 'option',
            //                             elem: 'footer'
            //                         },
            //                         content: [{
            //                             elem: 'user',
            //                             content: [{
            //                                 elem: 'image'
            //                             }, {
            //                                 block: 'menu-v',
            //                                 content: [{
            //                                     elem: 'item',
            //                                     content: 'Author One'
            //                                 }]
            //                             }]
            //                         }]
            //                     }]
            //                 }]
            //             }]
            //         }]
            //     }]
            // }
            {
                block: 'border'
            },
            {
                content: [{
                    block: 'fluid',
                    content: [{
                        elem: 'row',
                        mix: {
                            block: 'fluid',
                            elem: 'centered'
                        },
                        content: [{
                            block: 'topic',
                            content: [{
                                block: 'header',
                                mix: {
                                    block: 'header',
                                    elem: 'h1'
                                },
                                content: 'Blog'
                            }]
                        }, {
                            elem: 'md-middle',
                            content: [{
                                block: 'wrap',
                                mix: {
                                    block: 'fluid',
                                    elem: 'wrap'
                                },
                                mods: {
                                    bgc: 'color'
                                },
                                content: [{
                                    block: 'wrap',
                                    mix: {
                                        block: 'wrap',
                                        elem: 'pdn'
                                    },
                                    content: [{
                                        block: 'option',
                                        content: [{
                                            elem: 'wrap',
                                            content: [{
                                                elem: 'date',
                                                content: '11 Apr 2019',
                                                tag: 'p'
                                            }, {
                                                elem: 'content',
                                                content: 'Lorem Ipsum is simply dummy',
                                                tag: 'p'
                                            }, {
                                                elem: 'description',
                                                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                                                tag: 'p'
                                            }]
                                        }]
                                    }, {
                                        block: 'link',
                                        mods: {
                                            icon: 'right',
                                            theme: 'islands',
                                            size: 'm',
                                            disabled: true
                                        },
                                        url: 'https://bem.info/',
                                        content: 'Read Full Story'
                                    }]
                                }]
                            }]
                        }, {
                            elem: 'md-middle',
                            content: [{
                                block: 'wrap',
                                mix: {
                                    block: 'fluid',
                                    elem: 'wrap'
                                },
                                mods: {
                                    bgc: 'color'
                                },
                                content: [{
                                    block: 'wrap',
                                    mix: {
                                        block: 'wrap',
                                        elem: 'pdn'
                                    },
                                    content: [{
                                        block: 'option',
                                        content: [{
                                            elem: 'wrap',
                                            content: [{
                                                elem: 'date',
                                                content: '11 Apr 2019',
                                                tag: 'p'
                                            }, {
                                                elem: 'content',
                                                content: 'Lorem Ipsum is simply dummy',
                                                tag: 'p'
                                            }, {
                                                elem: 'description',
                                                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                                                tag: 'p'
                                            }]
                                        }]
                                    }, {
                                        block: 'link',
                                        mods: {
                                            icon: 'right',
                                            theme: 'islands',
                                            size: 'm',
                                            disabled: true
                                        },
                                        url: 'https://bem.info/',
                                        content: 'Read Full Story'
                                    }]
                                }]
                            }]
                        }, {
                            elem: 'md-middle',
                            content: [{
                                block: 'wrap',
                                mix: {
                                    block: 'fluid',
                                    elem: 'wrap'
                                },
                                mods: {
                                    bgc: 'color'
                                },
                                content: [{
                                    block: 'wrap',
                                    mix: {
                                        block: 'wrap',
                                        elem: 'pdn'
                                    },
                                    content: [{
                                        block: 'option',
                                        content: [{
                                            elem: 'wrap',
                                            content: [{
                                                elem: 'date',
                                                content: '11 Apr 2019',
                                                tag: 'p'
                                            }, {
                                                elem: 'content',
                                                content: 'Lorem Ipsum is simply dummy',
                                                tag: 'p'
                                            }, {
                                                elem: 'description',
                                                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                                                tag: 'p'
                                            }]
                                        }]
                                    }, {
                                        block: 'link',
                                        mods: {
                                            icon: 'right',
                                            theme: 'islands',
                                            size: 'm',
                                            disabled: true
                                        },
                                        url: 'https://bem.info/',
                                        content: 'Read Full Story'
                                    }]
                                }]
                            }]
                        }, {
                            block: 'spacer'
                        }, {
                            block: 'button',
                            mods: {
                                theme: 'islands',
                                size: 'm',
                                type: 'link',
                                custom: 'small'
                            },
                            url: 'https://bem.info/',
                            content: [{
                                elem: 'text',
                                content: 'Button'
                            }]
                        }]
                    }]
                }]
            }, {
                block: 'border'
            }, {
                content: [{
                    block: 'fluid',
                    content: [{
                        elem: 'row',
                        mix: {
                            block: 'fluid',
                            elem: 'centered'
                        },
                        content: [{
                            elem: 'md-big',
                            content: [{
                                block: 'wrap',
                                mix: {
                                    block: 'fluid',
                                    elem: 'wrap-big'
                                },
                                content: [{
                                    block: 'wrap',
                                    mix: {
                                        block: 'wrap',
                                        elem: 'pdn-big'
                                    },
                                    content: [{
                                        block: 'option',
                                        mix: {
                                            block: 'option',
                                            elem: 'footer'
                                        },
                                        content: [{
                                            block: 'option',
                                            content: [{
                                                elem: 'header',
                                                content: [{
                                                    content: 'Tag One'
                                                }]

                                            }]
                                        }, {
                                            elem: 'content',
                                            content: 'It is a long established fact that a reader will be distracted by the readable content.'
                                        }]
                                    }, {
                                        block: 'option',
                                        mix: {
                                            block: 'option',
                                            elem: 'description'
                                        },
                                        content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text.'
                                    }, {
                                        block: 'button',
                                        content: [{
                                            elem: 'wrap',
                                            mods: {
                                                custom: 'left'
                                            },
                                            content: [{
                                                block: 'button',
                                                mods: {
                                                    theme: 'islands',
                                                    size: 'm',
                                                    type: 'link',
                                                    custom: 'small'
                                                },
                                                url: 'https://bem.info/',
                                                content: [{
                                                    elem: 'text',
                                                    content: 'Button'
                                                }]
                                            }]
                                        }]
                                    }]
                                }]
                            }]
                        }, {
                            elem: 'md-big',
                            content: [{
                                block: 'wrap',
                                mix: {
                                    block: 'fluid',
                                    elem: 'wrap-big'
                                },
                                content: [{
                                    block: 'wrap',
                                    mix: {
                                        block: 'wrap',
                                        elem: 'pdn-big'
                                    },
                                    content: [{
                                        block: 'option',
                                        mix: {
                                            block: 'option',
                                            elem: 'footer'
                                        },
                                        content: [{
                                            block: 'option',
                                            content: [{
                                                elem: 'header',
                                                content: [{
                                                    content: 'Tag One'
                                                }]

                                            }]
                                        }, {
                                            elem: 'content',
                                            content: 'It is a long established fact that a reader will be distracted by the readable content.'
                                        }]
                                    }, {
                                        block: 'option',
                                        mix: {
                                            block: 'option',
                                            elem: 'description'
                                        },
                                        content: 'Contrary to popular belief, Lorem Ipsum is not simply random text.Contrary to popular belief, Lorem Ipsum is not simply random text.'
                                    }, {
                                        block: 'button',
                                        content: [{
                                            elem: 'wrap',
                                            mods: {
                                                custom: 'left'
                                            },
                                            content: [{
                                                block: 'button',
                                                mods: {
                                                    theme: 'islands',
                                                    size: 'm',
                                                    type: 'link',
                                                    custom: 'small'
                                                },
                                                url: 'https://bem.info/',
                                                content: [{
                                                    elem: 'text',
                                                    content: 'Button'
                                                }]
                                            }]
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
            }, {
                block: 'border'
            }, {
                content: [{
                    block: 'fluid',
                    content: [{
                        elem: 'row',
                        mix: {
                            block: 'fluid',
                            elem: 'centered'
                        },
                        content: [{
                            block: 'topic',
                            content: [{
                                block: 'header',
                                mix: {
                                    block: 'header',
                                    elem: 'h1'
                                },
                                content: 'Blog'
                            }]
                        }, {
                            elem: 'md-big',
                            content: [{
                                block: 'wrap',
                                content: [{
                                    block: 'blog',
                                    mods: {
                                        user: 'post'
                                    },
                                    content: [{
                                        elem: 'image'
                                    }]
                                }]
                            }, {
                                block: 'wrap',
                                content: [{
                                    block: 'option',
                                    content: [{
                                        elem: 'wrap',
                                        content: [{
                                            block: 'spacer'
                                        }, {
                                            elem: 'content',
                                            content: 'Wireframe connects the underlying conceptual structure',
                                        }, {
                                            elem: 'description',
                                            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                                        }]
                                    }]
                                }, {
                                    block: 'link',
                                    mix: {
                                        block: 'page',
                                        elem: 'left'
                                    },
                                    mods: {
                                        icon: 'right',
                                        theme: 'islands',
                                        size: 'm',
                                        disabled: true
                                    },
                                    url: 'https://bem.info/',
                                    content: 'Read Full Story'
                                }]
                            }]
                        }, {
                            elem: 'md-big',
                            content: [{
                                block: 'wrap',
                                content: [{
                                    block: 'mini',
                                    mix: {
                                        block: 'fluid',
                                        elem: 'middle'
                                    },
                                    content: [{
                                        mix: {
                                            block: 'fluid',
                                            elem: 'md-small'
                                        },
                                        content: [{
                                            block: 'blog',
                                            mods: {
                                                user: 'post'
                                            },
                                            content: [{
                                                elem: 'image'
                                            }]
                                        }, {
                                            block: 'spacer'
                                        }, {
                                            block: 'option',
                                            content: [{
                                                elem: 'wrap',
                                                content: [{
                                                    elem: 'date',
                                                    content: '11 Apr 2019',
                                                }, {
                                                    elem: 'content',
                                                    content: 'Lorem Ipsum is simply dummy',
                                                }, {
                                                    elem: 'description',
                                                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
                                                }]
                                            }]
                                        }]
                                    }, {
                                        mix: {
                                            block: 'fluid',
                                            elem: 'md-small'
                                        },
                                        content: [{
                                            block: 'blog',
                                            mods: {
                                                user: 'post'
                                            },
                                            content: [{
                                                elem: 'image'
                                            }]
                                        }, {
                                            block: 'spacer'
                                        }, {
                                            block: 'option',
                                            content: [{
                                                elem: 'wrap',
                                                content: [{
                                                    elem: 'date',
                                                    content: '11 Apr 2019',
                                                }, {
                                                    elem: 'content',
                                                    content: 'Lorem Ipsum is simply dummy',
                                                }, {
                                                    elem: 'description',
                                                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
                                                }]
                                            }]
                                        }]
                                    }]
                                }, {
                                    block: 'mini',
                                    mix: {
                                        block: 'fluid',
                                        elem: 'middle'
                                    },
                                    content: [{
                                        mix: {
                                            block: 'fluid',
                                            elem: 'md-small'
                                        },
                                        content: [{
                                            block: 'blog',
                                            mods: {
                                                user: 'post'
                                            },
                                            content: [{
                                                elem: 'image'
                                            }]
                                        }, {
                                            block: 'spacer'
                                        }, {
                                            block: 'option',
                                            content: [{
                                                elem: 'wrap',
                                                content: [{
                                                    elem: 'date',
                                                    content: '11 Apr 2019',
                                                }, {
                                                    elem: 'content',
                                                    content: 'Lorem Ipsum is simply dummy',
                                                }, {
                                                    elem: 'description',
                                                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
                                                }]
                                            }]
                                        }]
                                    }, {
                                        mix: {
                                            block: 'fluid',
                                            elem: 'md-small'
                                        },
                                        content: [{
                                            block: 'blog',
                                            mods: {
                                                user: 'post'
                                            },
                                            content: [{
                                                elem: 'image'
                                            }]
                                        }, {
                                            block: 'spacer'
                                        }, {
                                            block: 'option',
                                            content: [{
                                                elem: 'wrap',
                                                content: [{
                                                    elem: 'date',
                                                    content: '11 Apr 2019',
                                                }, {
                                                    elem: 'content',
                                                    content: 'Lorem Ipsum is simply dummy',
                                                }, {
                                                    elem: 'description',
                                                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
                                                }]
                                            }]
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
            }, {
                block: 'border'
            }, {
                content: [{
                    block: 'fluid',
                    content: [{
                        elem: 'row',
                        mix: {
                            block: 'fluid',
                            elem: 'centered'
                        },
                        content: [{
                            block: 'topic',
                            content: [{
                                block: 'header',
                                mix: {
                                    block: 'header',
                                    elem: 'h1'
                                },
                                content: 'Blog'
                            }]
                        }, {
                            elem: 'md-big',
                            mods: {
                                bgc: 'color'
                            },
                            content: [{
                                block: 'wrap',
                                mix: {
                                    block: 'fluid',
                                    elem: 'wrap-big'
                                },
                                content: [{
                                    block: 'wrap',
                                    mix: {
                                        block: 'wrap',
                                        elem: 'pdn-big'
                                    },
                                    content: [{
                                        block: 'blog',
                                        mods: {
                                            user: 'post'
                                        },
                                        content: [{
                                            elem: 'image'
                                        }]
                                    }, {
                                        block: 'option',
                                        content: [{
                                            elem: 'wrap',
                                            content: [{
                                                elem: 'content',
                                                tag: 'p',
                                                content: 'Lorem Ipsum is simply dummy text of the industry.'
                                            }, {
                                                elem: 'description',
                                                content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text.'
                                            }]
                                        }]
                                    }, {
                                        block: 'link',
                                        mods: {
                                            icon: 'star',
                                            theme: 'islands',
                                            size: 'm',
                                            disabled: true
                                        },
                                        url: 'https://bem.info/',
                                        content: 'Read Full Story'
                                    }]
                                }]
                            }]
                        }, {
                            elem: 'md-big',
                            content: [{
                                block: 'wrap',
                                mix: {
                                    block: 'fluid',
                                    elem: 'wrap-big'
                                },
                                content: [{
                                    block: '',
                                    mix: {
                                        block: 'fluid',
                                        elem: 'column'
                                    },
                                    content: [{
                                        block: 'wrap',
                                        mix: {
                                            block: 'wrap',
                                            elem: 'brd'
                                        },
                                        content: [{
                                            elem: 'pdn-middle',
                                            content: [{
                                                block: 'option',
                                                content: [{
                                                    elem: 'date',
                                                    content: '11 Apr 2019'
                                                }, {
                                                    elem: 'content',
                                                    content: 'Lorem Ipsum is simply dummy'
                                                }, {
                                                    elem: 'description',
                                                    content: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
                                                }]
                                            }, {
                                                block: 'link',
                                                mix: {
                                                    block: 'page',
                                                    elem: 'left'
                                                },
                                                mods: {
                                                    icon: 'right',
                                                    theme: 'islands',
                                                    size: 'm',
                                                    disabled: true
                                                },
                                                url: 'https://bem.info/',
                                                content: 'Read Full Story'
                                            }]
                                        }]
                                    }, {
                                        block: 'wrap',
                                        mix: {
                                            block: 'wrap',
                                            elem: 'brd'
                                        },
                                        content: [{
                                            elem: 'pdn-middle',
                                            content: [{
                                                block: 'option',
                                                content: [{
                                                    elem: 'date',
                                                    content: '11 Apr 2019'
                                                }, {
                                                    elem: 'content',
                                                    content: 'Lorem Ipsum is simply dummy'
                                                }, {
                                                    elem: 'description',
                                                    content: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
                                                }]
                                            }, {
                                                block: 'link',
                                                mix: {
                                                    block: 'page',
                                                    elem: 'left'
                                                },
                                                mods: {
                                                    icon: 'right',
                                                    theme: 'islands',
                                                    size: 'm',
                                                    disabled: true
                                                },
                                                url: 'https://bem.info/',
                                                content: 'Read Full Story'
                                            }]
                                        }]
                                    }]
                                }]
                            }]


                        }]
                    }]
                }]
            }, {
                block: 'sugar',
                content: [{
                    block: 'wrap',
                    elem: 'pdn-big',
                    content: [{
                        block: 'flex',
                        mix: {
                            block: 'flex',
                            elem: 'center'
                        },
                        mods: {
                            bgc: 'color'
                        },
                        content: [{
                            block: 'fluid',
                            elem: 'middle',
                            mix: {
                                block: 'wrap',
                                elem: 'centered'
                            },
                            content: [{
                                block: 'blog',
                                content: [{
                                    elem: 'image'
                                }]
                            }, {
                                block: 'header',
                                content: [{
                                    elem: 'big',
                                    content: 'Wireframe connects the underlying conceptual structure'
                                }]
                            }, {
                                block: 'option',
                                content: [{
                                    elem: 'user',
                                    content: [{
                                        elem: 'content',
                                        tag: 'p',
                                        content: 'by Author One'
                                    }]
                                }]
                            }, {
                                block: 'spacer'
                            }]
                        }]
                    }]
                }]
            }, {
                block: 'spacer'
            }, {
                block: 'communication',
                content: [{
                    block: 'fluid',
                    content: [{
                        block: 'fluid',
                        elem: 'big',
                        content: [{
                            elem: 'middle',
                            content: [{
                            block: 'option',
                            content: [{
                                elem: 'user',
                                content: [{
                                    elem: 'image'
                                }, {
                                    block: 'v-menu',
                                    content: [{
                                        elem: 'item',
                                        mods: {
                                            custom: "user"
                                        },
                                        content: [{
                                            tag: 'span',
                                            content: 'Author One'
                                        }, {
                                            content: '3:32 pm'
                                        }]

                                    }, {
                                        elem: 'item',
                                        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                                    }]
                                }]
                            }]
                        }, {
                            block: 'border'
                        }, {
                            block: 'option',
                            content: [{
                                elem: 'user',
                                content: [{
                                    elem: 'image'
                                }, {
                                    block: 'v-menu',
                                    content: [{
                                        elem: 'item',
                                        mods: {
                                            custom: "user"
                                        },
                                        content: [{
                                            tag: 'span',
                                            content: 'Author One'
                                        }, {
                                            content: '3:32 pm'
                                        }]

                                    }, {
                                        elem: 'item',
                                        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                                    }]
                                }]
                            }]
                        }]
                        }]
                        
                    }]
                }]

            }, {
                block: 'spacer'
            }
        ]
    }]
};
