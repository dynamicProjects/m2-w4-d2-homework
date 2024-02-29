new Vue({
    el: '#app',
    data: {
        posts: [
            {
                author: 'Brianna',
                date: 'February 18, 2021 @ 3:30 pm',
                content: 'Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!',
                foodieLevel: 'Intermediate',
                bio: 'Food enthusiast. Lover of spicy dishes and exotic flavors.'
            },
            {
                author: 'LINH',
                date: 'February 15, 2021 @ 9:46 am',
                content: 'I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good.  It’s a winner!  I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him.  Thank you Lisa!',
                foodieLevel: 'Beginner',
                bio: 'Cooking novice exploring new recipes and cuisines.'
            },
            {
                author: 'CATHERINE LEONARDO',
                date: 'February 13, 2021 @ 12:58 pm',
                content: 'I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.',
                foodieLevel: 'Expert',
                bio: 'Passionate about cooking and experimenting with recipes.'
            },
            {
                author: 'KALI',
                date: 'February 13, 2021 @ 11:31 am',
                content: 'This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!',
                foodieLevel: 'Intermediate',
                bio: 'Food lover who enjoys trying new dishes and sharing them with others.'
            }
        ],
        showProfileBox: false,
        selectedPost: {}
    },
    methods: {
        showProfile(post) {
            this.selectedPost = post;
            this.showProfileBox = true;
        },
        hideProfile() {
            this.showProfileBox = false;
        },
        closeProfile(){
            this.showProfileBox = false;
        }
    }
});