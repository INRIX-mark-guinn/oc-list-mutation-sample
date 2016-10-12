define(function(require) {
    'use strict';

    const
        ListControl = require('common/ui/ListControl'),
        ListChamber = require('common/platform/chamber/ListChamberAlpha');

    class MutationChamber extends ListChamber {
        data() {
            const testItems = [{
                icon: 'beer',
                text: ['Beer!', '', 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'],
            }, {
                icon: 'book',
                text: ['Books', '', 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.'],
            }, {
                icon: 'bell',
                text: ['Bells', '', 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.']
            }, {
                icon: 'coffee',
                text: ['Coffee', '', 'Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.']
            }, {
                icon: 'cutlery',
                text: ['Cutlery', '', 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.']
            }];

            return [{
                text: 'List',
                _data_tree_branch: [{
                    text: 'Horizontal',
                    _data_tree_branch: testItems,
                    _meta: {
                        orientation: ListControl.Orientation.HORIZONTAL
                    }
                }, {
                    text: 'Vertical',
                    _data_tree_branch: testItems,
                    _meta: {
                        orientation: ListControl.Orientation.VERTICAL
                    }
                }],
            }, {
                text: 'Grid',
                _meta: {
                    layout: ListControl.Layout.GRID
                },
                _data_tree_branch: [{
                    icon: 'arrows-h',
                    text: 'Horizontal',
                    _data_tree_branch: testItems,
                    _meta: {
                        orientation: ListControl.Orientation.HORIZONTAL
                    }
                }, {
                    icon: 'arrows-v',
                    text: 'Vertical',
                    _data_tree_branch: testItems,
                    _meta: {
                        orientation: ListControl.Orientation.VERTICAL
                    }
                }]
            }, {
                text: 'Hero',
                _meta: {
                    layout: ListControl.Layout.HERO
                },
                _data_tree_branch: [{
                    icon: 'arrows-h',
                    text: 'Horizontal',
                    _data_tree_branch: testItems,
                    _meta: {
                        orientation: ListControl.Orientation.HORIZONTAL
                    }
                }, {
                    icon: 'arrows-v',
                    text: 'Vertical',
                    _data_tree_branch: testItems,
                    _meta: {
                        orientation: ListControl.Orientation.VERTICAL
                    }
                }]
            }]
        }
    }

    return MutationChamber;
});
