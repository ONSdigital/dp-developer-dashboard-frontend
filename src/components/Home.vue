<template>
    <div>
        <div v-if="isLoading" class="loader">
            <p class="loader__text">Loading...</p>
            <div class="loader__icon">
                <div class="ferry">
                    <div class="chimney"></div>
                    <div class="waves"></div>
                </div>
            </div>
        </div>
        <div v-else>
            <Warnings :warnings='buildWarningItems()' />
            <Releases :releases="releases" />
        </div>
    </div>
</template>

<script>
import Warnings from './Warnings';
import Releases from './Releases';
import firebase from 'firebase';
import dateFormat from 'dateformat';

const firebaseConfig = {
    databaseURL: 'https://dp-developer-dashboard.firebaseio.com'
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.database();
const pullRequestsRef = db.ref('pull_requests');
const releasesRef = db.ref('releases');

export default {
    name: 'Home',
    components: {
        Warnings,
        Releases
    },
    data () {
        return {
            isLoading: true
        }
    },
    firebase: {
        pullRequests: {
            source: pullRequestsRef,
            readyCallback () {
                this.isLoading = false;
            }
        },
        releases: {
            source: releasesRef,
            readyCallback () {
                this.isLoading = false;
            },
            asObject: true
        }
    },
    ready () {
        this.isLoading = false;
    },
    methods: {
        buildWarningItems () {
            // const pullRequests = this.pullRequests.map(pr => {
            //     return {
            //         id: pr['.key'],
            //         type: 'Pull request',
            //         name: pr.repo,
            //         sub: pr.title,
            //         date: pr.created_date,
            //         user: { ...pr.user }
            //     }
            // });

            const pullRequests = [];
            this.pullRequests.forEach(repo => {
                try {
                    repo['.value'].forEach(pr => {
                        pullRequests.push({
                            id: pr['.key'],
                            type: 'Pull request',
                            name: pr.repo,
                            sub: pr.title,
                            date: dateFormat(pr.created_date, 'dd mmm yy - h:MM:ss tt'),
                            user: { ...pr.user }
                        });
                    });
                } catch (error) {
                    console.error('Error trying to loop through pull requests for ' + repo);
                }
            });

            return [ ...pullRequests ];
        }
    }
}
</script>

<style lang="scss" scoped>
.loader {
    position: relative;
    margin-left: 1rem;
    display: flex;
    justify-content: center;

    &__text {
        display: block;
        font-size: 2rem;
    }

    &__icon {
        display: block;
        position: absolute;
        bottom: -4rem;
        left: 48%;
    }
}


$waves: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjE1NSIgaGVpZ2h0PSI4NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDwhLS0gQ3JlYXRlZCB3aXRoIE1ldGhvZCBEcmF3IC0gaHR0cDovL2dpdGh1Yi5jb20vZHVvcGl4ZWwvTWV0aG9kLURyYXcvIC0tPgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSI4NyIgd2lkdGg9IjE1NyIgeT0iLTEiIHg9Ii0xIi8+CiAgPGcgZGlzcGxheT0ibm9uZSIgb3ZlcmZsb3c9InZpc2libGUiIHk9IjAiIHg9IjAiIGhlaWdodD0iMTAwJSIgd2lkdGg9IjEwMCUiIGlkPSJjYW52YXNHcmlkIj4KICAgPHJlY3QgZmlsbD0idXJsKCNncmlkcGF0dGVybikiIHN0cm9rZS13aWR0aD0iMCIgeT0iMCIgeD0iMCIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIvPgogIDwvZz4KIDwvZz4KIDxnPgogIDx0aXRsZT5MYXllciAxPC90aXRsZT4KICA8ZyBpZD0ic3ZnXzkiPgogICA8ZWxsaXBzZSByeT0iMjYiIHJ4PSIyNiIgaWQ9InN2Z18xIiBjeT0iMzMuNSIgY3g9IjM0LjUiIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSIjZmZmIi8+CiAgIDxlbGxpcHNlIHJ5PSIyNiIgcng9IjI2IiBpZD0ic3ZnXzMiIGN5PSIzMy41IiBjeD0iNjMuODY4NDkzIiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0iI2ZmZiIvPgogICA8ZWxsaXBzZSByeT0iMjYiIHJ4PSIyNiIgaWQ9InN2Z182IiBjeT0iMzMuNSIgY3g9IjkxLjcxODg4IiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0iI2ZmZiIvPgogICA8ZWxsaXBzZSByeT0iMjYiIHJ4PSIyNiIgaWQ9InN2Z183IiBjeT0iMzMuNSIgY3g9IjEyMS4wODczNzMiIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSIjZmZmIi8+CiAgIDxyZWN0IGlkPSJzdmdfOCIgaGVpZ2h0PSI0NiIgd2lkdGg9IjE0MC4wMDAwMDYiIHk9IjMyLjUiIHg9IjcuNSIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9IiNmZmYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPg==';

$colors : (
accent: #f0cf3c,
top-layer: #ecf0f1,
bottom-layer: #2b2b2b
);

.ferry {
    position: absolute;
    transform: translateY(-50%);
    display: inline-block;
    width: 64px;
    height: 32px;
    border-radius: 3px 0 0 0;
    background-color: map-get($colors, bottom-layer);
    z-index: 1;
    animation: bop .48s ease-in-out alternate infinite;

    @keyframes bop {
        to {
            transform: translateY(-40%);
        }
    }

    box-shadow: inset 0 -5px 0 0 #e74c3c, inset 0 -15px 0 0 #2b2b2b, inset 0 -17px 0 0 map-get($colors, accent);
    border-top: 4px solid map-get($colors, top-layer); 

    &:after {
        content: "";
        position: absolute;
        top: -18px;
        right: 0;
        display: block;
        width: 45px;
        height: 15px;
        background-color: map-get($colors, top-layer);
        z-index: 1;
        border-radius: 3px 3px 0 0;
    }

    &:before {
        content: "";
        position: absolute;
        transform: rotate(-25deg);
        top: -5px;
        left: -3px;
        width: 10px;
        height: 50px;
        background-color: white;

    }

    .chimney {
        position: absolute;
        top: -35px;
        display: block;
        width: 17px;
        height: 22px;
        background-color: map-get($colors, accent);
        left: 32px;
        z-index: -1;
        transform: rotate(8deg);
        box-shadow: inset 0 3px 0 0 map-get($colors, bottom-layer);
    }

    .waves {
        position: absolute;
        bottom: -37px;
        display: block;
        width: 100px;
        height: 50px;
        background-image: url($waves);
        background-size: 133% 144%;
        animation: sail 4s linear infinite;

        @keyframes sail {
            to {
                background-position: 400px 0;
            }
        }
    }
}
</style>
